import React, { createContext, useContext, useState, useEffect } from 'react';
import { Edit3, Image as ImageIcon } from 'lucide-react';

export interface FastTitleEditRequest {
  initialValue: string;
  label: string;
  multiline?: boolean;
  onSave: (newValue: string) => void;
}

export interface FastImageReplaceRequest {
  currentImageUrl: string;
  label: string;
  onSave: (newImageUrl: string) => void;
}

export interface AdminContextType {
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
  toggleAdmin: () => void;
  openFastTitleEditor: (request: FastTitleEditRequest) => void;
  openFastImageReplacer: (request: FastImageReplaceRequest) => void;
  activeTitleEdit: FastTitleEditRequest | null;
  closeTitleEditor: () => void;
  activeImageReplace: FastImageReplaceRequest | null;
  closeImageReplacer: () => void;
  // Unified App Logo Management
  customLogo: string | null;
  setCustomLogo: (logoUrl: string | null) => void;
  resetLogo: () => void;
  isLogoModalOpen: boolean;
  openLogoModal: () => void;
  closeLogoModal: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const STORAGE_KEY_IS_ADMIN = 'ppp_is_admin';
const STORAGE_KEY_CUSTOM_LOGO = 'ppp_custom_logo';

// Helper to dynamically update browser tab favicon
const updateFavicon = (url: string) => {
  try {
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = url;
  } catch (e) {
    console.error('Favicon update error:', e);
  }
};

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Always defaults to true for the site administrator/owner so the full WordPress Dashboard, Admin Bar, and Smart Box Edit are immediately active
  const [isAdmin, setIsAdminState] = useState<boolean>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_IS_ADMIN);
    // If previously toggled to false or unset, ensure admin dashboard and access are brought back to active
    if (saved === 'false') {
      try {
        localStorage.setItem(STORAGE_KEY_IS_ADMIN, 'true');
      } catch (e) {
        console.error(e);
      }
      return true;
    }
    return true;
  });

  const [activeTitleEdit, setActiveTitleEdit] = useState<FastTitleEditRequest | null>(null);
  const [activeImageReplace, setActiveImageReplace] = useState<FastImageReplaceRequest | null>(null);

  // App Logo State (Unified across Header, Footer, Admin Bar, Modals)
  const [customLogo, setCustomLogoState] = useState<string | null>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_CUSTOM_LOGO);
    return saved && saved.trim().length > 0 ? saved : null;
  });
  const [isLogoModalOpen, setIsLogoModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (customLogo) {
      updateFavicon(customLogo);
    }
  }, [customLogo]);

  // Global listener for shortcut (Alt+A or Ctrl+Shift+A) and URL hash (#admin / #wp-admin / #visitor)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.altKey && (e.key === 'a' || e.key === 'A')) || (e.ctrlKey && e.shiftKey && (e.key === 'a' || e.key === 'A'))) {
        e.preventDefault();
        toggleAdmin();
      }
    };

    const handleHashCheck = () => {
      const hash = window.location.hash;
      if (hash === '#admin' || hash === '#wp-admin') {
        setIsAdmin(true);
      } else if (hash === '#visitor') {
        setIsAdmin(false);
      }
    };

    handleHashCheck();
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('hashchange', handleHashCheck);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('hashchange', handleHashCheck);
    };
  }, []);

  const setIsAdmin = (val: boolean) => {
    setIsAdminState(val);
    localStorage.setItem(STORAGE_KEY_IS_ADMIN, String(val));
  };

  const toggleAdmin = () => {
    setIsAdminState((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY_IS_ADMIN, String(next));
      return next;
    });
  };

  // Double-click fast editing is enabled for all users
  const openFastTitleEditor = (request: FastTitleEditRequest) => {
    setActiveTitleEdit(request);
  };

  const closeTitleEditor = () => {
    setActiveTitleEdit(null);
  };

  // Double-click image replacement enabled globally for all images
  const openFastImageReplacer = (request: FastImageReplaceRequest) => {
    setActiveImageReplace(request);
  };

  const closeImageReplacer = () => {
    setActiveImageReplace(null);
  };

  // Unified App Logo Management methods
  const setCustomLogo = (logoUrl: string | null) => {
    if (logoUrl && logoUrl.trim().length > 0) {
      setCustomLogoState(logoUrl);
      localStorage.setItem(STORAGE_KEY_CUSTOM_LOGO, logoUrl);
      updateFavicon(logoUrl);
    } else {
      setCustomLogoState(null);
      localStorage.removeItem(STORAGE_KEY_CUSTOM_LOGO);
      updateFavicon('/ppp-union-logo.svg');
    }
  };

  const resetLogo = () => {
    setCustomLogo(null);
  };

  const openLogoModal = () => {
    setIsLogoModalOpen(true);
  };

  const closeLogoModal = () => {
    setIsLogoModalOpen(false);
  };

  return (
    <AdminContext.Provider
      value={{
        isAdmin,
        setIsAdmin,
        toggleAdmin,
        openFastTitleEditor,
        openFastImageReplacer,
        activeTitleEdit,
        closeTitleEditor,
        activeImageReplace,
        closeImageReplacer,
        customLogo,
        setCustomLogo,
        resetLogo,
        isLogoModalOpen,
        openLogoModal,
        closeLogoModal,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

// ==========================================
// Fast Editable Title Component for Admin
// ==========================================
interface AdminEditableTitleProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  value: string;
  label: string;
  onSave: (newValue: string) => void;
  multiline?: boolean;
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

export const AdminEditableTitle: React.FC<AdminEditableTitleProps> = ({
  as = 'span',
  value,
  label,
  onSave,
  multiline = false,
  className = '',
  id,
  children,
}) => {
  const { isAdmin, openFastTitleEditor } = useAdmin();

  const handleDoubleClick = (e: React.MouseEvent) => {
    if (!isAdmin) return;
    e.preventDefault();
    e.stopPropagation();
    openFastTitleEditor({
      initialValue: value,
      label,
      multiline,
      onSave,
    });
  };

  const Component = as as any;

  if (!isAdmin) {
    return (
      <Component id={id} className={className}>
        {children !== undefined ? children : value}
      </Component>
    );
  }

  return (
    <Component
      id={id}
      onDoubleClick={handleDoubleClick}
      title="Double-click to edit text"
      className={`group/admin-title relative transition-all duration-150 cursor-pointer select-text hover:outline-dashed hover:outline-2 hover:outline-sky-400 hover:outline-offset-2 hover:rounded-xs ${className}`}
    >
      {children !== undefined ? children : value}
      <span 
        aria-hidden="true" 
        className="opacity-0 group-hover/admin-title:opacity-100 transition-opacity duration-150 inline-flex items-center ml-1.5 align-middle text-sky-500 pointer-events-none"
        title="Double-click to edit"
      >
        <Edit3 className="w-3.5 h-3.5" />
      </span>
    </Component>
  );
};

// ==========================================
// Fast Editable Image Component for Admin
// ==========================================
interface AdminEditableImageProps {
  src: string;
  alt: string;
  label: string;
  onSave: (newImageUrl: string) => void;
  className?: string;
  containerClassName?: string;
  id?: string;
  fallbackSrc?: string;
}

export const AdminEditableImage: React.FC<AdminEditableImageProps> = ({
  src,
  alt,
  label,
  onSave,
  className = '',
  containerClassName = '',
  id,
  fallbackSrc = '/un-sdg-summit.jpg',
}) => {
  const { isAdmin, openFastImageReplacer } = useAdmin();

  const handleDoubleClick = (e: React.MouseEvent) => {
    if (!isAdmin) return;
    e.preventDefault();
    e.stopPropagation();
    openFastImageReplacer({
      currentImageUrl: src,
      label,
      onSave,
    });
  };

  const handleClickReplace = (e: React.MouseEvent) => {
    if (!isAdmin) return;
    e.preventDefault();
    e.stopPropagation();
    openFastImageReplacer({
      currentImageUrl: src,
      label,
      onSave,
    });
  };

  if (!isAdmin) {
    return (
      <div className={`overflow-hidden select-none ${containerClassName}`}>
        <img
          id={id}
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          className={className}
          onError={(e) => {
            if (fallbackSrc) {
              (e.target as HTMLImageElement).src = fallbackSrc;
            }
          }}
        />
      </div>
    );
  }

  return (
    <div
      onDoubleClick={handleDoubleClick}
      title="Double-click to replace or change image"
      className={`group/admin-img relative cursor-pointer overflow-hidden select-none ${containerClassName}`}
    >
      <img
        id={id}
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onDoubleClick={handleDoubleClick}
        className={`transition-all duration-300 group-hover/admin-img:brightness-90 ${className}`}
        onError={(e) => {
          if (fallbackSrc) {
            (e.target as HTMLImageElement).src = fallbackSrc;
          }
        }}
      />
      {/* Floating Hover Badge & Center Action */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/admin-img:opacity-100 transition-opacity duration-200 flex items-center justify-center p-3 pointer-events-none">
        <button
          type="button"
          onClick={handleClickReplace}
          className="pointer-events-auto bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 transform scale-95 group-hover/admin-img:scale-100 transition-all cursor-pointer"
          title="Click or double-click to replace image"
        >
          <ImageIcon className="w-4 h-4 text-white" />
          <span>Double-click or Tap to Replace Image</span>
        </button>
      </div>

      {/* Prominent one-click button for instant replacement (works on touch and mobile too) */}
      <div className="absolute top-2.5 right-2.5 z-10 pointer-events-auto">
        <button
          type="button"
          onClick={handleClickReplace}
          className="bg-slate-950/85 hover:bg-sky-600 text-white font-bold text-[11px] px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5 backdrop-blur-xs border border-sky-400/40 hover:border-sky-300 transition-all cursor-pointer"
          title="Click to change or replace this photo"
        >
          <ImageIcon className="w-3.5 h-3.5 text-sky-400" />
          <span>Change Photo</span>
        </button>
      </div>
    </div>
  );
};
