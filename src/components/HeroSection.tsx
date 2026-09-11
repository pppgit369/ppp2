import React from 'react';
import { ArrowRight, Edit3, Sparkles, MessageSquare } from 'lucide-react';
import { HeroContent, EditableBox } from '../types';
import { AdminEditableTitle, AdminEditableImage, useAdmin } from '../context/AdminContext';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  hero: HeroContent;
  isEditMode: boolean;
  onEditBox: (box: EditableBox) => void;
  onNavigate: (href: string) => void;
  onUpdateHero?: (updated: Partial<HeroContent>) => void;
  onOpenSmartMessenger?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  hero,
  isEditMode,
  onEditBox,
  onNavigate,
  onUpdateHero,
  onOpenSmartMessenger,
}) => {
  const { isAdmin, openFastTitleEditor, openFastImageReplacer } = useAdmin();
  const { translateHero, isRTL } = useLanguage();
  const activeHero = translateHero(hero);

  const updateHeroField = (field: keyof HeroContent, value: string) => {
    if (onUpdateHero) {
      onUpdateHero({ [field]: value });
    }
  };

  const handleEditHeroText = () => {
    onEditBox({
      id: 'hero-text-box',
      type: 'hero',
      title: `${hero.headlinePrefix}${hero.headlineHighlight}`,
      subtitle: hero.badge,
      content: hero.description,
      badge: hero.badge,
      link: hero.primaryCtaLink,
      meta: {
        headlinePrefix: hero.headlinePrefix,
        headlineHighlight: hero.headlineHighlight,
        primaryCtaText: hero.primaryCtaText,
        primaryCtaLink: hero.primaryCtaLink,
        secondaryCtaText: hero.secondaryCtaText,
        secondaryCtaLink: hero.secondaryCtaLink,
      }
    });
  };

  const handleEditHeroImageCard = () => {
    onEditBox({
      id: 'hero-image-box',
      type: 'card',
      title: hero.imageCardDate,
      content: hero.imageCardText,
      badge: 'UN 2030 Landmark Resolution',
      meta: {
        imageCardDate: hero.imageCardDate,
        imageCardText: hero.imageCardText,
        imageUrl: hero.imageUrl,
      }
    });
  };

  return (
    <section 
      id="hero-banner-section" 
      className="bg-white py-10 md:py-16 px-4 sm:px-6 lg:px-12 border-b border-slate-100 overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Description & Call to Actions */}
          <div 
            id="hero-text-container"
            className={`lg:col-span-6 xl:col-span-6 relative rounded-2xl transition-all duration-200 ${
              isEditMode ? 'p-4 -m-4 border-2 border-dashed border-amber-400 bg-amber-50/20' : ''
            }`}
          >
            {isEditMode && (
              <button
                onClick={handleEditHeroText}
                className="absolute -top-3 right-2 px-3 py-1 bg-amber-400 text-slate-900 font-bold text-xs rounded-full shadow-md flex items-center gap-1.5 hover:bg-amber-300 z-10 cursor-pointer animate-bounce"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Hero Text Box</span>
              </button>
            )}

            {/* Pill Tag Badge with Admin Fast Edit */}
            <div className="inline-flex items-center gap-2 mb-5">
              <AdminEditableTitle
                as="span"
                value={activeHero.badge}
                label="Hero Tag Badge"
                onSave={(val) => updateHeroField('badge', val)}
                className="px-3 py-1 rounded-md bg-[#e6f3fa] text-[#0072bc] text-xs font-bold tracking-wider uppercase inline-block"
              />
            </div>

            {/* Main Headline with Double-Click Fast Editing for Admin */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] mb-6">
              <AdminEditableTitle
                as="span"
                value={activeHero.headlinePrefix}
                label="Hero Headline Prefix"
                onSave={(val) => updateHeroField('headlinePrefix', val)}
                className="inline"
              />
              {' '}
              <AdminEditableTitle
                as="span"
                value={activeHero.headlineHighlight}
                label="Hero Headline Highlight"
                onSave={(val) => updateHeroField('headlineHighlight', val)}
                className="text-[#0072bc] block sm:inline"
              />
            </h1>

            {/* Subtitle Description with Double-Click Fast Editing for Admin */}
            <div className="mb-8 max-w-xl">
              <AdminEditableTitle
                as="p"
                value={activeHero.description}
                label="Hero Description Text"
                multiline={true}
                onSave={(val) => updateHeroField('description', val)}
                className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed sm:leading-loose text-justify hyphens-auto"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                id="hero-primary-cta"
                onClick={() => {
                  if (onOpenSmartMessenger) {
                    onOpenSmartMessenger();
                  } else {
                    onNavigate(hero.primaryCtaLink);
                  }
                }}
                className="px-6 py-3.5 bg-[#0072bc] hover:bg-[#005a96] text-white font-bold rounded-md text-sm sm:text-base flex items-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg transform active:scale-98 cursor-pointer"
                title="Connect to PPP Union Smart Messenger"
              >
                <AdminEditableTitle
                  as="span"
                  value={activeHero.primaryCtaText}
                  label="Primary Button Label"
                  onSave={(val) => updateHeroField('primaryCtaText', val)}
                />
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={() => onNavigate(hero.secondaryCtaLink)}
                className="px-6 py-3.5 bg-white hover:bg-blue-50/60 text-[#0072bc] border border-[#0072bc] font-bold rounded-md text-sm sm:text-base transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer"
              >
                <AdminEditableTitle
                  as="span"
                  value={activeHero.secondaryCtaText}
                  label="Secondary Button Label"
                  onSave={(val) => updateHeroField('secondaryCtaText', val)}
                />
              </button>
            </div>
          </div>

          {/* Right Column: UN General Assembly Photo with Floating Card Overlay */}
          <div 
            id="hero-visual-container"
            className={`lg:col-span-6 xl:col-span-6 relative rounded-2xl transition-all duration-200 ${
              isEditMode ? 'p-2 border-2 border-dashed border-amber-400 bg-amber-50/20' : ''
            }`}
          >
            {isEditMode && (
              <button
                onClick={handleEditHeroImageCard}
                className="absolute top-4 right-4 px-3 py-1 bg-amber-400 text-slate-900 font-bold text-xs rounded-full shadow-md flex items-center gap-1.5 hover:bg-amber-300 z-20 cursor-pointer"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Photo Overlay Box</span>
              </button>
            )}

            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-200/80 aspect-16/10 sm:aspect-16/9 bg-slate-900 group">
              {/* UN General Assembly Hall SDG Summit Image with Double-Click Fast Image Replacer for Admin */}
              <AdminEditableImage
                id="un-assembly-hero-image"
                src={hero.imageUrl || '/un-sdg-summit.jpg'}
                alt="United Nations General Assembly Hall during the SDG Summit, High-Level Conclave on the 17 Sustainable Development Goals"
                label="Hero Featured UN SDG Summit Photograph"
                onSave={(newUrl) => updateHeroField('imageUrl', newUrl)}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                fallbackSrc="/un-sdg-summit.jpg"
              />

              {/* Subtle Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none"></div>

              {/* Floating Card Overlay on Bottom-Left Corner with Double-Click Fast Edit */}
              <div 
                id="hero-floating-milestone-card"
                className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 max-w-[280px] sm:max-w-xs bg-white rounded-xl p-4 sm:p-5 shadow-2xl border border-slate-100/90 text-left z-10 animate-in fade-in slide-in-from-bottom-3 duration-500"
              >
                <AdminEditableTitle
                  as="span"
                  value={activeHero.imageCardDate}
                  label="Floating Card Date Tag"
                  onSave={(val) => updateHeroField('imageCardDate', val)}
                  className="text-[11px] font-bold text-[#0072bc] tracking-wider uppercase block mb-1.5"
                />
                <AdminEditableTitle
                  as="p"
                  value={activeHero.imageCardText}
                  label="Floating Card Milestone Text"
                  multiline={true}
                  onSave={(val) => updateHeroField('imageCardText', val)}
                  className="text-xs sm:text-sm font-medium text-slate-800 leading-snug"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
