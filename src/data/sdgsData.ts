import { SDGItem } from '../types';

/**
 * Complete, authoritative dataset of all 17 United Nations Sustainable Development Goals (SDGs)
 * enriched with all official UN sub-goals (targets), comprehensive diplomatic descriptions,
 * detailed Public-Private Partnership (PPP) delivery mechanisms, custodian agencies, and metrics.
 */
export const COMPREHENSIVE_17_SDGS: SDGItem[] = [
  {
    number: 1,
    title: 'No Poverty',
    subtitle: 'End poverty in all its forms everywhere by 2030',
    color: '#E5243B',
    description: 'Eradicating extreme poverty, establishing robust universal social protection floors, and ensuring equal access to basic services, economic resources, and property rights through bankable, pro-poor concession models.',
    leadAgency: 'UNDP, World Bank, ILO',
    investmentFocus: '$1.4 Trillion Annual Global Developing State Capitalization',
    keyMetrics: ['Proportion of population living below international poverty line ($2.15/day)', 'Percentage covered by social protection floors'],
    pppApplication: 'Concession models for subsidized rural electrification, decentralized potable water kiosks, social housing availability contracts, and micro-infrastructure facilities.',
    targets: [
      'By 2030, eradicate extreme poverty for all people everywhere, currently measured as people living on less than $2.15 a day.',
      'By 2030, reduce at least by half the proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions.',
      'Implement nationally appropriate social protection systems and measures for all, including floors, and by 2030 achieve substantial coverage of the poor and the vulnerable.',
      'Ensure all men and women have equal rights to economic resources, access to basic services, ownership and control over land, inheritance, natural resources, and financial services.',
      'Build the resilience of the poor and those in vulnerable situations to climate-related extreme events and other economic, social and environmental shocks and disasters.',
      'Ensure significant mobilization of resources from a variety of sources to provide adequate and predictable means for developing countries to implement poverty alleviation programs.'
    ],
    subGoals: [
      {
        code: '1.1',
        title: 'Eradicate Extreme Poverty',
        officialText: 'By 2030, eradicate extreme poverty for all people everywhere, currently measured as people living on less than $2.15 a day.',
        pppMechanism: 'Viability Gap Funding (VGF) concessions for last-mile infrastructure, subsidized utility connections, and community micro-grids.',
        indicators: 'Proportion of population below international poverty line disaggregated by sex, age, and geographical location.'
      },
      {
        code: '1.2',
        title: 'Halve Multidimensional Poverty',
        officialText: 'By 2030, reduce at least by half the proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions.',
        pppMechanism: 'Public-private social housing trusts, community asset co-development, and targeted municipal service delivery concessions.',
        indicators: 'Multidimensional Poverty Index (MPI) composite national reduction rates.'
      },
      {
        code: '1.3',
        title: 'Universal Social Protection Systems',
        officialText: 'Implement nationally appropriate social protection systems and measures for all, including floors, and by 2030 achieve substantial coverage of the poor and the vulnerable.',
        pppMechanism: 'Public-private digital payment infrastructure, biometric benefit delivery networks, and micro-insurance consortia.',
        indicators: 'Percentage of vulnerable population effectively covered by statutory social protection tiers.'
      },
      {
        code: '1.4',
        title: 'Equal Rights to Ownership & Basic Services',
        officialText: 'By 2030, ensure that all men and women, in particular the poor and vulnerable, have equal rights to economic resources, basic services, land tenure, natural resources, appropriate technology and financial services.',
        pppMechanism: 'Decentralized public service concessions (water, sanitation, clean energy) backed by municipal service level agreements and land-titling digitizations.',
        indicators: 'Proportion of adult population with legally recognized title documentation and universal utility access.'
      },
      {
        code: '1.5',
        title: 'Build Resilience to Climate & Economic Shocks',
        officialText: 'By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure to climate-related extreme events and other economic, social and environmental disasters.',
        pppMechanism: 'Parametric catastrophe bond partnerships, climate-resilient community seawalls, and disaster response infrastructure concessions.',
        indicators: 'Number of deaths, missing persons and directly affected persons attributed to disasters per 100,000 population.'
      },
      {
        code: '1.a',
        title: 'Resource Mobilization for Developing Nations',
        officialText: 'Ensure significant mobilization of resources from a variety of sources, including through enhanced development cooperation, to provide adequate and predictable means for developing countries.',
        pppMechanism: 'Blended finance vehicles co-funded by multilateral development banks (MDBs), sovereign wealth funds, and private commercial syndicates.',
        indicators: 'Total official development assistance and blended capital mobilized for poverty eradication infrastructure.'
      },
      {
        code: '1.b',
        title: 'Pro-Poor Policy Investment Frameworks',
        officialText: 'Create sound policy frameworks at national, regional and international levels, based on pro-poor and gender-sensitive development strategies, to accelerate poverty eradication actions.',
        pppMechanism: 'Standardized PPP concession contracts enforcing pro-poor tariff ceilings, community benefit agreements, and mandatory local job creation quotas.',
        indicators: 'National public expenditure allocated to basic infrastructure services for low-income brackets.'
      }
    ],
    iconName: 'ShieldAlert'
  },
  {
    number: 2,
    title: 'Zero Hunger',
    subtitle: 'End hunger, achieve food security, improve nutrition and promote sustainable agriculture',
    color: '#DDA63A',
    description: 'Eliminating hunger and all forms of malnutrition by expanding food production resilience, cold chain storage logistics, agro-processing clusters, and transparent agricultural trade through private sector agribusiness partnerships.',
    leadAgency: 'FAO, WFP, IFAD',
    investmentFocus: '$260 Billion Annual Agronomic & Logistics Capital Requirement',
    keyMetrics: ['Prevalence of undernourishment', 'Prevalence of moderate or severe food insecurity (FIES)'],
    pppApplication: 'Grain silo concessions, smart irrigation networks, temperature-controlled cold chain distribution corridors, and fertilizer manufacturing joint ventures.',
    targets: [
      'By 2030, end hunger and ensure access by all people, in particular the poor and people in vulnerable situations, including infants, to safe, nutritious and sufficient food all year round.',
      'By 2030, end all forms of malnutrition, including achieving the internationally agreed targets on stunting and wasting in children under 5 years of age.',
      'By 2030, double the agricultural productivity and incomes of small-scale food producers, in particular women, indigenous peoples, and family farmers.',
      'By 2030, ensure sustainable food production systems and implement resilient agricultural practices that increase productivity and production.',
      'By 2020, maintain the genetic diversity of seeds, cultivated plants and farmed and domesticated animals and their related wild species.',
      'Increase investment, including through enhanced international cooperation, in rural infrastructure, agricultural research and extension services.'
    ],
    subGoals: [
      {
        code: '2.1',
        title: 'Universal Access to Safe & Nutritious Food',
        officialText: 'By 2030, end hunger and ensure access by all people, in particular the poor and people in vulnerable situations, to safe, nutritious and sufficient food all year round.',
        pppMechanism: 'Strategic national grain reserve concessions, urban food terminal wholesale hubs, and subsidized nutritional distribution networks.',
        indicators: 'Prevalence of undernourishment and food insecurity experience scale metrics.'
      },
      {
        code: '2.2',
        title: 'End All Forms of Malnutrition',
        officialText: 'By 2030, end all forms of malnutrition, including addressing stunting and wasting in children under 5 years of age, and nutritional needs of adolescent girls, pregnant and lactating women.',
        pppMechanism: 'Public-private fortification partnerships, school feeding catering concessions with strict nutritional KPIs, and therapeutic food supply chains.',
        indicators: 'Prevalence of stunting and wasting among children under 5 years of age.'
      },
      {
        code: '2.3',
        title: 'Double Smallholder Productivity & Incomes',
        officialText: 'By 2030, double the agricultural productivity and incomes of small-scale food producers through secure and equal access to land, inputs, knowledge, financial services and markets.',
        pppMechanism: 'Outgrower scheme concessions, anchor agribusiness processing facilities providing guaranteed off-take contracts to smallholders.',
        indicators: 'Average annual income of small-scale food producers compared to commercial benchmarks.'
      },
      {
        code: '2.4',
        title: 'Sustainable Food Production & Resilient Agriculture',
        officialText: 'By 2030, ensure sustainable food production systems and implement resilient practices that increase productivity, help maintain ecosystems, and strengthen capacity for climate adaptation.',
        pppMechanism: 'Concessions for pressurized drip irrigation networks, aquifer recharge engineering, and agro-voltaic solar farming facilities.',
        indicators: 'Proportion of agricultural area under certified sustainable agricultural productive practices.'
      },
      {
        code: '2.5',
        title: 'Maintain Agricultural Genetic Diversity',
        officialText: 'Maintain genetic diversity of seeds, cultivated plants and domesticated animals, and ensure fair and equitable sharing of benefits arising from genetic resources.',
        pppMechanism: 'Seed bank infrastructure partnerships, sovereign-private research laboratories, and bio-repository concessions.',
        indicators: 'Number of plant and animal genetic resources secured in medium- or long-term conservation facilities.'
      },
      {
        code: '2.a',
        title: 'Invest in Rural Infrastructure & Agronomic Tech',
        officialText: 'Increase investment in rural infrastructure, agricultural research, extension services, technology development and plant/livestock gene banks.',
        pppMechanism: 'Rural road corridor rehabilitation availability contracts, primary processing agro-industrial parks, and rural broadband concessions.',
        indicators: 'Agriculture orientation index for government expenditures and private foreign direct investment volume.'
      },
      {
        code: '2.b',
        title: 'Prevent Agricultural Trade Distortions',
        officialText: 'Correct and prevent trade restrictions and distortions in world agricultural markets, including through parallel elimination of all agricultural export subsidies.',
        pppMechanism: 'Cross-border bonded dry ports, trade corridor facilitation concessions, and digital customs phytosanitary clearing portals.',
        indicators: 'Producer support estimates and agricultural export subsidy reduction commitments.'
      },
      {
        code: '2.c',
        title: 'Stable Commodity Markets & Strategic Reserves',
        officialText: 'Adopt measures to ensure the proper functioning of food commodity markets and facilitate timely access to market information, including on food reserves, to limit price volatility.',
        pppMechanism: 'Commodity exchange trading platforms operated via public concession, electronic warehouse receipt financing systems.',
        indicators: 'Indicator of food price anomalies (IFPA) measuring extreme price volatility.'
      }
    ],
    iconName: 'Wheat'
  },
  {
    number: 3,
    title: 'Good Health & Well-being',
    subtitle: 'Ensure healthy lives and promote well-being for all at all ages',
    color: '#4C9F38',
    description: 'Transforming healthcare delivery through Design-Build-Finance-Operate (DBFO) hospital concessions, digital health telemedicine networks, diagnostic imaging hubs, and localized vaccine production facilities.',
    leadAgency: 'WHO, UNAIDS, UNICEF',
    investmentFocus: '$370 Billion Annual Universal Health Coverage Expansion',
    keyMetrics: ['Maternal mortality ratio per 100,000 live births', 'Under-5 mortality rate per 1,000 live births', 'Universal health coverage service index'],
    pppApplication: 'Design-Build-Finance-Operate-Maintain (DBFOM) hospital concessions, managed equipment service (MES) agreements, diagnostic laboratory networks, and cold chain vaccine distribution.',
    targets: [
      'By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births.',
      'By 2030, end preventable deaths of newborns and children under 5 years of age.',
      'By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases.',
      'By 2030, reduce by one third premature mortality from non-communicable diseases through prevention and treatment.',
      'Achieve universal health coverage, including financial risk protection, access to quality essential health-care services and affordable essential medicines.',
      'Substantially increase health financing and the recruitment, development, training and retention of the health workforce in developing countries.'
    ],
    subGoals: [
      {
        code: '3.1',
        title: 'Reduce Maternal Mortality',
        officialText: 'By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births.',
        pppMechanism: 'Specialized maternal and neonatal hospital DBFO concessions, rural maternity transport networks, and remote ultrasound telemetry.',
        indicators: 'Maternal mortality ratio and proportion of births attended by skilled health personnel.'
      },
      {
        code: '3.2',
        title: 'End Preventable Newborn & Child Deaths',
        officialText: 'By 2030, end preventable deaths of newborns and children under 5 years of age, reducing neonatal mortality to ≤12 per 1,000 live births.',
        pppMechanism: 'Pediatric hospital wings operated under availability-payment concessions, regional oxygen generation plant partnerships.',
        indicators: 'Under-5 mortality rate and neonatal mortality rate per 1,000 live births.'
      },
      {
        code: '3.3',
        title: 'End Communicable Disease Epidemics',
        officialText: 'By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases.',
        pppMechanism: 'Automated diagnostic screening network concessions, sovereign-private vector control concessions, and therapeutic distribution hubs.',
        indicators: 'Incidence of malaria, tuberculosis, and HIV per 1,000 uninfected population.'
      },
      {
        code: '3.4',
        title: 'Reduce Premature Mortality from NCDs',
        officialText: 'By 2030, reduce by one third premature mortality from non-communicable diseases (cardiovascular, cancer, diabetes, respiratory) and promote mental health.',
        pppMechanism: 'Comprehensive oncology and radiotherapy center concessions, managed equipment service (MES) contracts for MRI/CT scanners.',
        indicators: 'Mortality rate attributed to cardiovascular disease, cancer, diabetes or chronic respiratory disease.'
      },
      {
        code: '3.8',
        title: 'Achieve Universal Health Coverage (UHC)',
        officialText: 'Achieve universal health coverage, including financial risk protection, access to quality essential health-care services and access to safe, effective, quality and affordable essential medicines and vaccines for all.',
        pppMechanism: 'Integrated regional health network concessions combining primary care clinics, secondary hospitals, and centralized laboratory testing.',
        indicators: 'Coverage of essential health services index (UHC Index).'
      },
      {
        code: '3.b',
        title: 'Vaccine & Medicine R&D and Manufacturing',
        officialText: 'Support research and development of vaccines and medicines for communicable and non-communicable diseases; provide access to affordable essential medicines.',
        pppMechanism: 'Domestic pharmaceutical and vaccine manufacturing joint ventures under sovereign off-take agreements and TRIPS flexibilities.',
        indicators: 'Proportion of the target population covered by all vaccines included in national programs.'
      },
      {
        code: '3.c',
        title: 'Expand Health Workforce & Health Financing',
        officialText: 'Substantially increase health financing and the recruitment, development, training and retention of the health workforce in developing countries.',
        pppMechanism: 'Medical and nursing college infrastructure PPPs, clinical simulation training centers with private healthcare operators.',
        indicators: 'Health worker density (physicians, nursing and midwifery personnel) per 10,000 population.'
      },
      {
        code: '3.d',
        title: 'Early Warning & Health Emergency Preparedness',
        officialText: 'Strengthen the capacity of all countries, in particular developing countries, for early warning, risk reduction and management of national and global health risks.',
        pppMechanism: 'National emergency bio-safety laboratory concessions, strategic medical equipment stockpiling leases, and biosurveillance telemetry.',
        indicators: 'International Health Regulations (IHR) core capacity index.'
      }
    ],
    iconName: 'HeartPulse'
  },
  {
    number: 4,
    title: 'Quality Education',
    subtitle: 'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all',
    color: '#C5192D',
    description: 'Modernizing pedagogical infrastructure, vocational polytechnics, STEM research centers, and nationwide digital school broadband networks through long-term educational infrastructure availability concessions.',
    leadAgency: 'UNESCO, UNICEF',
    investmentFocus: '$500 Billion Annual Global Educational Facility Modernization',
    keyMetrics: ['Completion rate of primary, lower secondary, and upper secondary education', 'Minimum proficiency rate in reading and mathematics'],
    pppApplication: 'Bundled school infrastructure concessions, university campus student housing DBFOM, digital classroom connectivity pacts, and vocational technical education operating contracts.',
    targets: [
      'By 2030, ensure that all girls and boys complete free, equitable and quality primary and secondary education leading to relevant and effective learning outcomes.',
      'By 2030, ensure that all girls and boys have access to quality early childhood development, care and pre-primary education so that they are ready for primary education.',
      'By 2030, ensure equal access for all women and men to affordable and quality technical, vocational and tertiary education, including university.',
      'By 2030, substantially increase the number of youth and adults who have relevant skills, including technical and vocational skills, for employment, decent jobs and entrepreneurship.',
      'By 2030, eliminate gender disparities in education and ensure equal access to all levels of education and vocational training for the vulnerable.',
      'Build and upgrade education facilities that are child, disability and gender sensitive and provide safe, non-violent, inclusive and effective learning environments for all.'
    ],
    subGoals: [
      {
        code: '4.1',
        title: 'Universal Free Primary & Secondary Education',
        officialText: 'By 2030, ensure all girls and boys complete free, equitable and quality primary and secondary education leading to relevant learning outcomes.',
        pppMechanism: 'Batched school infrastructure procurement (20-50 schools per concession bundle) maintaining physical plant while public authorities retain curriculum.',
        indicators: 'Proportion of children achieving minimum proficiency in reading and mathematics.'
      },
      {
        code: '4.2',
        title: 'Early Childhood Development & Pre-Primary Care',
        officialText: 'By 2030, ensure that all girls and boys have access to quality early childhood development, care and pre-primary education so that they are ready for primary school.',
        pppMechanism: 'Community pre-school facility development concessions integrated with local municipal civic centers.',
        indicators: 'Proportion of children under 5 years developmentally on track in health, learning and psychosocial well-being.'
      },
      {
        code: '4.3',
        title: 'Equal Access to Technical, Vocational & University',
        officialText: 'By 2030, ensure equal access for all women and men to affordable and quality technical, vocational and tertiary education, including university.',
        pppMechanism: 'Polytechnic institute concessions co-managed with industrial manufacturing and engineering consortia.',
        indicators: 'Participation rate of youth and adults in formal and non-formal education and training.'
      },
      {
        code: '4.4',
        title: 'Relevant Skills for Decent Employment & Tech',
        officialText: 'By 2030, substantially increase the number of youth and adults who have relevant skills, including technical and vocational skills, for employment, decent jobs and entrepreneurship.',
        pppMechanism: 'Coding academies and advanced STEM centers developed via technology company concessions with guaranteed job-placement agreements.',
        indicators: 'Proportion of youth and adults with ICT skills by type of skill.'
      },
      {
        code: '4.a',
        title: 'Build Safe, Inclusive & Resilient Learning Facilities',
        officialText: 'Build and upgrade education facilities that are child, disability and gender sensitive and provide safe, non-violent, inclusive and effective learning environments for all.',
        pppMechanism: 'Availability-payment school infrastructure contracts guaranteeing seismic resilience, clean water, solar electricity, and accessible sanitation.',
        indicators: 'Proportion of schools with access to electricity, internet, basic drinking water, and single-sex sanitation facilities.'
      },
      {
        code: '4.b',
        title: 'Expand International Higher-Education Scholarships',
        officialText: 'By 2020, substantially expand globally the number of scholarships available to developing countries for enrollment in higher education and technical programs.',
        pppMechanism: 'Public-private scholarship endowments co-funded by multinational concessionaires operating major national infrastructure projects.',
        indicators: 'Volume of official development assistance flows for scholarships by sector and type of study.'
      },
      {
        code: '4.c',
        title: 'Increase Supply of Qualified Teachers',
        officialText: 'By 2030, substantially increase the supply of qualified teachers, including through international cooperation for teacher training in developing countries.',
        pppMechanism: 'Digital pedagogical teacher training academies and distance education broadcast network concessions.',
        indicators: 'Proportion of teachers with minimum required pedagogical qualifications.'
      }
    ],
    iconName: 'GraduationCap'
  },
  {
    number: 5,
    title: 'Gender Equality',
    subtitle: 'Achieve gender equality and empower all women and girls',
    color: '#FF3A21',
    description: 'Enforcing gender-responsive procurement policies across all infrastructure concessions, establishing dedicated funding facilities for female-led contractors, and guaranteeing safe public transit for women.',
    leadAgency: 'UN Women',
    investmentFocus: '$360 Billion Annual Gender Equity & Economic Inclusion Pipeline',
    keyMetrics: ['Proportion of seats held by women in national parliaments and local governments', 'Proportion of women in managerial positions'],
    pppApplication: 'Gender-mandated procurement quotas in infrastructure supply chains, safe and illuminated women-priority public transit concessions, and female-led micro-utility contracts.',
    targets: [
      'End all forms of discrimination against all women and girls everywhere.',
      'Eliminate all forms of violence against all women and girls in the public and private spheres, including trafficking and sexual exploitation.',
      'Recognize and value unpaid care and domestic work through the provision of public services, infrastructure and social protection policies.',
      'Ensure women’s full and effective participation and equal opportunities for leadership at all levels of decision-making in political, economic and public life.',
      'Ensure universal access to sexual and reproductive health and reproductive rights.',
      'Undertake reforms to give women equal rights to economic resources, as well as access to ownership and control over land and financial services.'
    ],
    subGoals: [
      {
        code: '5.1',
        title: 'End Discrimination Against Women & Girls',
        officialText: 'End all forms of discrimination against all women and girls everywhere.',
        pppMechanism: 'Mandatory non-discrimination charters and equal-pay verification clauses in all PPP Union certified infrastructure contracts.',
        indicators: 'Legal frameworks enforcing non-discrimination and equality in employment and procurement.'
      },
      {
        code: '5.2',
        title: 'Eliminate Violence & Trafficking in Public Spaces',
        officialText: 'Eliminate all forms of violence against all women and girls in the public and private spheres, including trafficking and sexual exploitation.',
        pppMechanism: 'Public transit and urban streetscape concessions integrating CCTV surveillance, SOS beacons, well-lit corridors, and security staffing.',
        indicators: 'Proportion of women experiencing physical or sexual violence in public transit and civic areas.'
      },
      {
        code: '5.4',
        title: 'Value Unpaid Care Work with Public Infrastructure',
        officialText: 'Recognize and value unpaid care and domestic work through the provision of public services, infrastructure and social protection policies, and promotion of shared responsibility.',
        pppMechanism: 'Childcare facility concessions situated inside transit stations, public markets, and municipal industrial employment zones.',
        indicators: 'Time spent on unpaid domestic and care work by sex and location.'
      },
      {
        code: '5.5',
        title: 'Equal Participation & Leadership in Governance',
        officialText: 'Ensure women’s full and effective participation and equal opportunities for leadership at all levels of decision-making in economic and public life.',
        pppMechanism: 'Mandatory minimum 30% female executive and engineering board representation on all Special Purpose Vehicles (SPVs) executing sovereign concessions.',
        indicators: 'Proportion of women in executive managerial and infrastructure director roles.'
      },
      {
        code: '5.a',
        title: 'Equal Rights to Economic Resources & Property',
        officialText: 'Undertake reforms to give women equal rights to economic resources, as well as access to ownership and control over land, financial services, inheritance and natural resources.',
        pppMechanism: 'Gender-lens blended financing facilities providing debt guarantees and credit enhancements to women-owned engineering and supplier enterprises.',
        indicators: 'Proportion of total agricultural and commercial land ownership held by women.'
      },
      {
        code: '5.b',
        title: 'Enabling Technology for Female Empowerment',
        officialText: 'Enhance the use of enabling technology, in particular information and communications technology, to promote the empowerment of women.',
        pppMechanism: 'Digital literacy public access centers and female-targeted micro-fintech mobile broadband concessions.',
        indicators: 'Proportion of individuals who own a mobile telephone and digital bank account by sex.'
      },
      {
        code: '5.c',
        title: 'Enforceable Legislation for Gender Equality',
        officialText: 'Adopt and strengthen sound policies and enforceable legislation for the promotion of gender equality and the empowerment of all women and girls at all levels.',
        pppMechanism: 'Institutional gender auditing protocols certifying compliance with UNECE People-First PPP Gender Equality Benchmark.',
        indicators: 'Proportion of government systems that track and make public allocations for gender equality.'
      }
    ],
    iconName: 'Users'
  },
  {
    number: 6,
    title: 'Clean Water & Sanitation',
    subtitle: 'Ensure availability and sustainable management of water and sanitation for all',
    color: '#26BDE2',
    description: 'Developing climate-resilient water infrastructure, seawater reverse osmosis desalination plants, smart water loss reduction concessions, and urban wastewater treatment and recycling facilities.',
    leadAgency: 'UN-Water, UNICEF, WHO',
    investmentFocus: '$1.0 Trillion Annual Global Water & Sanitation Infrastructure Demand',
    keyMetrics: ['Proportion of population using safely managed drinking water services', 'Proportion using safely managed sanitation services'],
    pppApplication: 'Build-Own-Operate-Transfer (BOOT) seawater desalination, performance-based non-revenue water (NRW) reduction concessions, and municipal wastewater recycling plants.',
    targets: [
      'By 2030, achieve universal and equitable access to safe and affordable drinking water for all.',
      'By 2030, achieve access to adequate and equitable sanitation and hygiene for all and end open defecation.',
      'By 2030, improve water quality by reducing pollution, eliminating dumping and minimizing release of hazardous chemicals, and halving the proportion of untreated wastewater.',
      'By 2030, substantially increase water-use efficiency across all sectors and ensure sustainable withdrawals and supply of freshwater.',
      'By 2030, implement integrated water resources management at all levels, including through transboundary cooperation.',
      'Protect and restore water-related ecosystems, including mountains, forests, wetlands, rivers, aquifers and lakes.'
    ],
    subGoals: [
      {
        code: '6.1',
        title: 'Universal Safe & Affordable Drinking Water',
        officialText: 'By 2030, achieve universal and equitable access to safe and affordable drinking water for all.',
        pppMechanism: 'Municipal water supply concessions, rural water kiosk concession networks, and piped conveyance BOT concessions.',
        indicators: 'Proportion of population using safely managed drinking water services.'
      },
      {
        code: '6.2',
        title: 'Universal Sanitation & End Open Defecation',
        officialText: 'By 2030, achieve access to adequate and equitable sanitation and hygiene for all and end open defecation, paying special attention to the needs of women and girls.',
        pppMechanism: 'City-wide inclusive sanitation (CWIS) concessions, fecal sludge treatment plant BOTs, and school sanitation maintenance contracts.',
        indicators: 'Proportion of population using safely managed sanitation services, including hand-washing facilities.'
      },
      {
        code: '6.3',
        title: 'Improve Water Quality & Halve Untreated Wastewater',
        officialText: 'By 2030, improve water quality by reducing pollution, eliminating dumping, halving untreated wastewater and substantially increasing recycling and safe reuse.',
        pppMechanism: 'Industrial effluent treatment plant concessions, tertiary municipal wastewater recycling plants supplying irrigation and cooling water.',
        indicators: 'Proportion of domestic and industrial wastewater flows safely treated.'
      },
      {
        code: '6.4',
        title: 'Water-Use Efficiency & Scarcity Mitigation',
        officialText: 'By 2030, substantially increase water-use efficiency across all sectors and ensure sustainable withdrawals and supply of freshwater to address water scarcity.',
        pppMechanism: 'Performance-based non-revenue water (NRW) management contracts guaranteeing reduction in physical pipe leakage and illegal tapping.',
        indicators: 'Change in water-use efficiency over time and level of water stress.'
      },
      {
        code: '6.5',
        title: 'Integrated Water Resources Management (IWRM)',
        officialText: 'By 2030, implement integrated water resources management at all levels, including through transboundary cooperation as appropriate.',
        pppMechanism: 'River basin authority concession frameworks, multi-purpose dam and hydro-power PPPs, and transboundary water metering pacts.',
        indicators: 'Degree of integrated water resources management implementation (0-100 score).'
      },
      {
        code: '6.6',
        title: 'Protect & Restore Water-Related Ecosystems',
        officialText: 'By 2020, protect and restore water-related ecosystems, including mountains, forests, wetlands, rivers, aquifers and lakes.',
        pppMechanism: 'Payment for Ecosystem Services (PES) contracts, constructed wetland treatment concessions, and aquifer recharge engineering partnerships.',
        indicators: 'Change in the extent of water-related ecosystems over time.'
      },
      {
        code: '6.a',
        title: 'International Cooperation in Water & Sanitation',
        officialText: 'By 2030, expand international cooperation and capacity-building support to developing countries in water- and sanitation-related activities and programs.',
        pppMechanism: 'Sovereign technical assistance desks structuring bankable water utilities under UNECE People-First standards.',
        indicators: 'Amount of water- and sanitation-related official development assistance part of a government-coordinated spending plan.'
      },
      {
        code: '6.b',
        title: 'Local Community Participation in Water Management',
        officialText: 'Support and strengthen the participation of local communities in improving water and sanitation management.',
        pppMechanism: 'Community co-management agreements embedded inside private water distribution concessions, establishing local water user boards.',
        indicators: 'Proportion of local administrative units with established operational policies and procedures for community participation.'
      }
    ],
    iconName: 'Droplets'
  },
  {
    number: 7,
    title: 'Affordable & Clean Energy',
    subtitle: 'Ensure access to affordable, reliable, sustainable and modern energy for all',
    color: '#FCC30B',
    description: 'Accelerating utility-scale solar photovoltaic, offshore and onshore wind, battery energy storage systems (BESS), regional transmission interconnections, and green hydrogen through bankable Power Purchase Agreements (PPAs).',
    leadAgency: 'UNDP, UNEP, Sustainable Energy for All (SEforALL)',
    investmentFocus: '$2.2 Trillion Annual Renewable Energy & Grid Modernization Capital',
    keyMetrics: ['Proportion of population with access to electricity', 'Renewable energy share in total final energy consumption'],
    pppApplication: 'Independent Power Producer (IPP) contracts, long-term 25-year Power Purchase Agreements (PPAs), off-grid mini-grid concessions, and HVDC transmission interconnectors.',
    targets: [
      'By 2030, ensure universal access to affordable, reliable and modern energy services.',
      'By 2030, increase substantially the share of renewable energy in the global energy mix.',
      'By 2030, double the global rate of improvement in energy efficiency.',
      'By 2030, enhance international cooperation to facilitate access to clean energy research and technology, including renewable energy and energy efficiency.',
      'By 2030, expand infrastructure and upgrade technology for supplying modern and sustainable energy services for all in developing countries.'
    ],
    subGoals: [
      {
        code: '7.1',
        title: 'Universal Access to Electricity & Clean Cooking',
        officialText: 'By 2030, ensure universal access to affordable, reliable and modern energy services for all.',
        pppMechanism: 'Rural solar home system concessions, mini-grid concessions, and liquefied petroleum gas (LPG) / induction cooking supply chains.',
        indicators: 'Proportion of population with access to electricity and primary reliance on clean fuels and technology for cooking.'
      },
      {
        code: '7.2',
        title: 'Substantially Increase Renewable Energy Share',
        officialText: 'By 2030, increase substantially the share of renewable energy in the global energy mix.',
        pppMechanism: 'Utility-scale solar PV and wind IPP auctions with sovereign payment guarantees backed by multilateral political risk insurance.',
        indicators: 'Renewable energy share in total final energy consumption.'
      },
      {
        code: '7.3',
        title: 'Double Rate of Energy Efficiency Improvement',
        officialText: 'By 2030, double the global rate of improvement in energy efficiency.',
        pppMechanism: 'Energy Service Company (ESCO) performance contracts for public buildings, industrial waste heat recovery, and LED streetlight retrofits.',
        indicators: 'Energy intensity measured in terms of primary energy and GDP.'
      },
      {
        code: '7.a',
        title: 'Clean Energy R&D & Investment Mobilization',
        officialText: 'By 2030, enhance international cooperation to facilitate access to clean energy research and technology, and promote investment in energy infrastructure.',
        pppMechanism: 'Green bond syndications, climate transition funds, and public-private consortia for green hydrogen production and export.',
        indicators: 'International financial flows to developing countries in support of clean energy research and development.'
      },
      {
        code: '7.b',
        title: 'Expand & Upgrade Grid Infrastructure in Developing Nations',
        officialText: 'By 2030, expand infrastructure and upgrade technology for supplying modern and sustainable energy services for all in developing countries.',
        pppMechanism: 'High-Voltage Direct Current (HVDC) transmission line concessions, smart grid metering DBFOM, and regional power pool trading platforms.',
        indicators: 'Installed renewable energy-generating capacity in developing countries (in watts per capita).'
      }
    ],
    iconName: 'Zap'
  },
  {
    number: 8,
    title: 'Decent Work & Economic Growth',
    subtitle: 'Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all',
    color: '#A21942',
    description: 'Fostering sustained economic diversification, enforcing ILO international labor conventions across all infrastructure sites, and mandating local content, fair wages, and apprentice upskilling in every concession.',
    leadAgency: 'ILO, UNCTAD, World Bank',
    investmentFocus: '$1.8 Trillion Annual Industrial Modernization & Job Creation Framework',
    keyMetrics: ['Annual growth rate of real GDP per capita', 'Unemployment rate by sex, age and persons with disabilities'],
    pppApplication: 'Local content mandates in infrastructure contracts, special economic zone (SEZ) concessions, industrial apprentice training trusts, and micro-enterprise supply chain integration.',
    targets: [
      'Sustain per capita economic growth in accordance with national circumstances and, in particular, at least 7 per cent gross domestic product growth per annum in the least developed countries.',
      'Achieve higher levels of economic productivity through diversification, technological upgrading and innovation.',
      'Promote development-oriented policies that support productive activities, decent job creation, entrepreneurship, creativity and innovation.',
      'Improve progressively global resource efficiency in consumption and production and endeavor to decouple economic growth from environmental degradation.',
      'By 2030, achieve full and productive employment and decent work for all women and men, including for young people and persons with disabilities, and equal pay for work of equal value.',
      'By 2020, substantially reduce the proportion of youth not in employment, education or training (NEET).'
    ],
    subGoals: [
      {
        code: '8.1',
        title: 'Sustained Per Capita Economic Growth',
        officialText: 'Sustain per capita economic growth in accordance with national circumstances and, in particular, at least 7 per cent gross domestic product growth per annum in least developed countries.',
        pppMechanism: 'Trade corridor and logistics infrastructure concessions lowering national export friction and freight logistics overhead.',
        indicators: 'Annual growth rate of real GDP per capita.'
      },
      {
        code: '8.2',
        title: 'Diversification & Technological Upgrading',
        officialText: 'Achieve higher levels of economic productivity through diversification, technological upgrading and innovation, including through a focus on high-value added sectors.',
        pppMechanism: 'Special Economic Zones (SEZs), science and technology parks, and advanced manufacturing incubators operated via master developer concessions.',
        indicators: 'Annual growth rate of real GDP per employed person.'
      },
      {
        code: '8.3',
        title: 'Support Decent Jobs & Formalize Micro/SMEs',
        officialText: 'Promote development-oriented policies that support productive activities, decent job creation, entrepreneurship, and encourage formalization and growth of micro-, small- and medium-sized enterprises.',
        pppMechanism: 'Mandated tier-2 and tier-3 subcontractor procurement quotas requiring prime concessionaires to award 25%+ of contracts to domestic SMEs.',
        indicators: 'Proportion of informal employment in total employment, by sector and sex.'
      },
      {
        code: '8.5',
        title: 'Full Employment, Decent Work & Equal Pay',
        officialText: 'By 2030, achieve full and productive employment and decent work for all women and men, including young people and persons with disabilities, and equal pay for work of equal value.',
        pppMechanism: 'Enforceable ILO core convention clauses in concession agreements covering living wages, safe worker housing, and whistleblower protection.',
        indicators: 'Average hourly earnings of employees by sex, occupation, age and persons with disabilities.'
      },
      {
        code: '8.6',
        title: 'Substantially Reduce Youth NEET Rate',
        officialText: 'By 2020, substantially reduce the proportion of youth not in employment, education or training (NEET).',
        pppMechanism: 'Mandatory apprentice and vocational cadet programs funded by infrastructure project capital expenditure (CAPEX).',
        indicators: 'Proportion of youth (aged 15-24 years) not in education, employment or training.'
      },
      {
        code: '8.7',
        title: 'Eradicate Forced Labour, Modern Slavery & Child Labour',
        officialText: 'Take immediate and effective measures to eradicate forced labour, end modern slavery and human trafficking and secure prohibition and elimination of child labour.',
        pppMechanism: 'Independent third-party supply chain audits, digital worker identity management, and biometric access control on construction sites.',
        indicators: 'Proportion and number of children aged 5-17 years engaged in child labour.'
      },
      {
        code: '8.8',
        title: 'Protect Labour Rights & Safe Working Environments',
        officialText: 'Protect labour rights and promote safe and secure working environments for all workers, including migrant workers and those in precarious employment.',
        pppMechanism: 'Health and safety zero-harm penalties, mandatory accident compensation insurance, and migrant worker protection protocols.',
        indicators: 'Fatal and non-fatal occupational injury rates per 100,000 workers.'
      },
      {
        code: '8.10',
        title: 'Expand Access to Banking & Financial Services',
        officialText: 'Strengthen the capacity of domestic financial institutions to encourage and expand access to banking, insurance and financial services for all.',
        pppMechanism: 'Interoperable retail payments switches, sovereign-private credit guarantee schemes, and agent banking franchise networks.',
        indicators: 'Number of commercial bank branches and automated teller machines (ATMs) per 100,000 adults.'
      }
    ],
    iconName: 'TrendingUp'
  },
  {
    number: 9,
    title: 'Industry, Innovation & Infrastructure',
    subtitle: 'Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation',
    color: '#FD6925',
    description: 'The core operational engine of the PPP Union: developing deep-sea container ports, electrified freight and high-speed passenger rail, 5G fiber backbones, multi-modal dry ports, and decarbonized industrial corridors.',
    leadAgency: 'UNIDO, UNECE, World Bank, ITU',
    investmentFocus: '$3.7 Trillion Annual Global Resilient Infrastructure Deficit',
    keyMetrics: ['Proportion of the rural population who live within 2 km of an all-season road', 'Passenger and freight volumes by mode of transport', 'Manufacturing value added as a proportion of GDP'],
    pppApplication: 'Toll road BOTs, deep-water port concessions, rail DBFOMs, wholesale broadband open-access networks, and smart logistics dry docks.',
    targets: [
      'Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being.',
      'Promote inclusive and sustainable industrialization and, by 2030, significantly raise industry’s share of employment and gross domestic product.',
      'Increase the access of small-scale industrial and other enterprises, in particular in developing countries, to financial services, including affordable credit, and their integration into value chains.',
      'By 2030, upgrade infrastructure and retrofit industries to make them sustainable, with increased resource-use efficiency and greater adoption of clean and environmentally sound technologies.',
      'Enhance scientific research, upgrade the technological capabilities of industrial sectors in all countries, including encouraging innovation and substantially increasing research personnel.',
      'Significantly increase access to information and communications technology and strive to provide universal and affordable access to the Internet in least developed countries.'
    ],
    subGoals: [
      {
        code: '9.1',
        title: 'Develop Resilient & Transboundary Infrastructure',
        officialText: 'Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being.',
        pppMechanism: 'Cross-border transport corridors, toll motorways, deep-water ports, and intermodal freight logistics hubs executed via multi-jurisdictional concession agreements.',
        indicators: 'Proportion of the rural population living within 2 km of an all-season road (Rural Access Index).'
      },
      {
        code: '9.2',
        title: 'Promote Inclusive & Sustainable Industrialization',
        officialText: 'Promote inclusive and sustainable industrialization and, by 2030, significantly raise industry’s share of employment and GDP in least developed countries.',
        pppMechanism: 'Eco-industrial parks providing centralized wastewater treatment, shared cogeneration power, and plug-and-play factory shells for manufacturers.',
        indicators: 'Manufacturing value added (MVA) as a proportion of GDP and per capita.'
      },
      {
        code: '9.3',
        title: 'Integrate Small Enterprises into Global Value Chains',
        officialText: 'Increase the access of small-scale industrial enterprises, particularly in developing countries, to financial services, affordable credit, and integration into value chains.',
        pppMechanism: 'Supply-chain reverse factoring platforms, shared warehousing logistics concessions, and incubator leasing structures.',
        indicators: 'Proportion of small-scale industries in total industry value added and with credit access.'
      },
      {
        code: '9.4',
        title: 'Retrofit Industries for Climate & Resource Efficiency',
        officialText: 'By 2030, upgrade infrastructure and retrofit industries to make them sustainable, with increased resource-use efficiency and greater adoption of clean technologies.',
        pppMechanism: 'Industrial carbon capture and storage (CCUS) concessions, green hydrogen pipelines, and circular industrial symbiosis utilities.',
        indicators: 'CO2 emission per unit of value added across industrial sectors.'
      },
      {
        code: '9.5',
        title: 'Enhance Scientific Research & Innovation Capabilities',
        officialText: 'Enhance scientific research, upgrade technological capabilities of industrial sectors, encouraging innovation and substantially increasing R&D personnel.',
        pppMechanism: 'National research laboratory concessions, university-industry innovation hubs, and sovereign patent commercialization funds.',
        indicators: 'Research and development expenditure as a proportion of GDP.'
      },
      {
        code: '9.a',
        title: 'Mobilize Financial & Technical Support for Africa & LDCs',
        officialText: 'Facilitate sustainable and resilient infrastructure development in developing countries through enhanced financial, technological and technical support to African countries, LDCs, LLDCs and SIDS.',
        pppMechanism: 'Project preparation facilities (PPFs) covering pre-feasibility, legal structuring, and environmental impact assessments to make sovereign pipelines bankable.',
        indicators: 'Total official international support (ODA plus other official flows) to infrastructure.'
      },
      {
        code: '9.b',
        title: 'Support Domestic Technology Development & Industrial Research',
        officialText: 'Support domestic technology development, research and innovation in developing countries, including by ensuring a conducive policy environment for industrial diversification.',
        pppMechanism: 'Technology transfer covenants in infrastructure concessions requiring international consortia to build local research centers.',
        indicators: 'Proportion of medium and high-tech industry value added in total value added.'
      },
      {
        code: '9.c',
        title: 'Universal & Affordable ICT & Internet Access',
        officialText: 'Significantly increase access to information and communications technology and strive to provide universal and affordable access to the Internet in least developed countries by 2020.',
        pppMechanism: 'Open-access fiber optic backbone concessions, subsea cable landing stations, and rural 4G/5G tower-sharing infrastructure consortia.',
        indicators: 'Proportion of population covered by a mobile network, by technology (3G, 4G, 5G).'
      }
    ],
    iconName: 'Building2'
  },
  {
    number: 10,
    title: 'Reduced Inequalities',
    subtitle: 'Reduce inequality within and among countries',
    color: '#DD1367',
    description: 'Overcoming spatial, socioeconomic, and territorial disparities by connecting neglected hinterlands through subsidized transit corridors, universal telecom funds, and inclusive public service tariff designs.',
    leadAgency: 'UNDP, UN-DESA, World Bank',
    investmentFocus: '$450 Billion Annual Regional Territorial Convergence Capital',
    keyMetrics: ['Growth rates of household expenditure or income per capita among the bottom 40 per cent of the population', 'Gini coefficient'],
    pppApplication: 'Universal Service Funds (USF) for rural broadband, subsidized regional transit routes, equitable cross-border trade corridors, and inclusive tariff concessions.',
    targets: [
      'By 2030, progressively achieve and sustain income growth of the bottom 40 per cent of the population at a rate higher than the national average.',
      'By 2030, empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin, religion or economic status.',
      'Ensure equal opportunity and reduce inequalities of outcome, including by eliminating discriminatory laws, policies and practices.',
      'Adopt policies, especially fiscal, wage and social protection policies, and progressively achieve greater equality.',
      'Improve the regulation and monitoring of global financial markets and institutions and strengthen the implementation of such regulations.',
      'Facilitate orderly, safe, regular and responsible migration and mobility of people, including through the implementation of planned and well-managed migration policies.'
    ],
    subGoals: [
      {
        code: '10.1',
        title: 'Accelerate Income Growth for the Bottom 40%',
        officialText: 'By 2030, progressively achieve and sustain income growth of the bottom 40 per cent of the population at a rate higher than the national average.',
        pppMechanism: 'Inclusive infrastructure procurement prioritizing economic corridors connecting impoverished provinces with maritime export hubs.',
        indicators: 'Growth rates of household income per capita among the bottom 40 per cent versus total population.'
      },
      {
        code: '10.2',
        title: 'Promote Universal Social, Economic & Political Inclusion',
        officialText: 'By 2030, empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin, religion or economic or other status.',
        pppMechanism: 'Universal accessibility mandates in all public transit and civic building concessions meeting UN Convention on the Rights of Persons with Disabilities (CRPD) standards.',
        indicators: 'Proportion of people living below 50 per cent of median income, by sex, age and persons with disabilities.'
      },
      {
        code: '10.3',
        title: 'Ensure Equal Opportunity & Eliminate Discrimination',
        officialText: 'Ensure equal opportunity and reduce inequalities of outcome, including by eliminating discriminatory laws, policies and practices and promoting appropriate legislation.',
        pppMechanism: 'Anti-nepotism and transparent digital tendering processes verified by independent civil society observers and public registries.',
        indicators: 'Proportion of population reporting having personally felt discriminated against or harassed.'
      },
      {
        code: '10.4',
        title: 'Adopt Progressive Fiscal, Wage & Social Policies',
        officialText: 'Adopt policies, especially fiscal, wage and social protection policies, and progressively achieve greater equality.',
        pppMechanism: 'Cross-subsidization tariff structures in concession agreements ensuring low-income households pay reduced lifeline rates for basic power and water.',
        indicators: 'Labour share of GDP, comprising wages and social protection transfers.'
      },
      {
        code: '10.7',
        title: 'Safe, Orderly & Responsible Human Mobility',
        officialText: 'Facilitate orderly, safe, regular and responsible migration and mobility of people, including through the implementation of planned and well-managed migration policies.',
        pppMechanism: 'Integrated border management crossing facility concessions, humane migrant reception and processing centers with dignified basic infrastructure.',
        indicators: 'Recruitment cost borne by employee as a proportion of monthly income earned in country of destination.'
      },
      {
        code: '10.c',
        title: 'Reduce Migrant Remittance Transfer Fees to <3%',
        officialText: 'By 2030, reduce to less than 3 per cent the transaction costs of migrant remittances and eliminate remittance corridors with costs higher than 5 per cent.',
        pppMechanism: 'National postal service digital remittance concessions, interoperable digital wallet corridors utilizing distributed ledger rails.',
        indicators: 'Remittance costs as a proportion of the amount remitted.'
      }
    ],
    iconName: 'Scale'
  },
  {
    number: 11,
    title: 'Sustainable Cities & Communities',
    subtitle: 'Make cities and human settlements inclusive, safe, resilient and sustainable',
    color: '#FD9D24',
    description: 'Re-engineering urban centers with Bus Rapid Transit (BRT), light rail metro networks, social and affordable housing, smart waste-to-energy facilities, and flood-resilient stormwater management systems.',
    leadAgency: 'UN-Habitat',
    investmentFocus: '$2.5 Trillion Annual Urban Regeneration & Resilient Transit Capital',
    keyMetrics: ['Proportion of urban population living in slums, informal settlements or inadequate housing', 'Proportion of population with convenient access to public transport'],
    pppApplication: 'Urban light rail transit DBFOM, social housing availability concessions, smart LED municipal lighting, automated vacuum waste collection, and district cooling concessions.',
    targets: [
      'By 2030, ensure access for all to adequate, safe and affordable housing and basic services and upgrade slums.',
      'By 2030, provide access to safe, affordable, accessible and sustainable transport systems for all, improving road safety, notably by expanding public transport.',
      'By 2030, enhance inclusive and sustainable urbanization and capacity for participatory, integrated and sustainable human settlement planning and management.',
      'Strengthen efforts to protect and safeguard the world’s cultural and natural heritage.',
      'By 2030, significantly reduce the number of deaths and the number of people affected and substantially decrease the direct economic losses relative to global GDP caused by disasters.',
      'By 2030, reduce the adverse per capita environmental impact of cities, including by paying special attention to air quality and municipal and other waste management.'
    ],
    subGoals: [
      {
        code: '11.1',
        title: 'Universal Affordable Housing & Slum Upgrading',
        officialText: 'By 2030, ensure access for all to adequate, safe and affordable housing and basic services and upgrade slums.',
        pppMechanism: 'Public-private social housing concessions, land-pooling urban regeneration schemes, and availability-payment residential community developments.',
        indicators: 'Proportion of urban population living in slums, informal settlements or inadequate housing.'
      },
      {
        code: '11.2',
        title: 'Affordable, Accessible & Sustainable Urban Transit',
        officialText: 'By 2030, provide access to safe, affordable, accessible and sustainable transport systems for all, notably by expanding public transport with special attention to vulnerable groups.',
        pppMechanism: 'Metro rail, Bus Rapid Transit (BRT), and electric bus fleet concessions operated under gross-cost or net-cost service availability agreements.',
        indicators: 'Proportion of population that has convenient access to public transport, by sex, age and persons with disabilities.'
      },
      {
        code: '11.3',
        title: 'Participatory & Integrated Settlement Planning',
        officialText: 'By 2030, enhance inclusive and sustainable urbanization and capacity for participatory, integrated and sustainable human settlement planning and management in all countries.',
        pppMechanism: 'Transit-Oriented Development (TOD) joint ventures leveraging land-value capture to co-finance public urban infrastructure.',
        indicators: 'Ratio of land consumption rate to population growth rate.'
      },
      {
        code: '11.4',
        title: 'Protect & Safeguard World Cultural & Natural Heritage',
        officialText: 'Strengthen efforts to protect and safeguard the world’s cultural and natural heritage.',
        pppMechanism: 'Heritage restoration concessions, sustainable eco-tourism facility partnerships, and cultural monument preservation trust funds.',
        indicators: 'Total per capita expenditure on the preservation, protection and conservation of all cultural and natural heritage.'
      },
      {
        code: '11.5',
        title: 'Reduce Disaster Casualties & Economic Losses',
        officialText: 'By 2030, significantly reduce the number of deaths and people affected and substantially decrease direct economic losses caused by disasters, including water-related disasters.',
        pppMechanism: 'Urban stormwater retention tunnel concessions, flood diversion canals, and automated seismic early warning siren networks.',
        indicators: 'Direct economic loss attributed to disasters in relation to global gross domestic product.'
      },
      {
        code: '11.6',
        title: 'Reduce Urban Air Pollution & Manage Municipal Waste',
        officialText: 'By 2030, reduce the adverse per capita environmental impact of cities, including by paying special attention to air quality and municipal and other waste management.',
        pppMechanism: 'Municipal solid waste-to-energy concessions, sanitary landfill methane capture facilities, and continuous air quality monitoring networks.',
        indicators: 'Proportion of urban solid waste collected and managed in controlled facilities; annual mean levels of fine particulate matter (e.g. PM2.5 and PM10).'
      },
      {
        code: '11.7',
        title: 'Provide Universal Access to Safe Green Public Spaces',
        officialText: 'By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities.',
        pppMechanism: 'Urban park and waterfront promenade concessions funded through commercial amenity retail and recreational concessions.',
        indicators: 'Average share of the built-up area of cities that is open space in public use for all.'
      }
    ],
    iconName: 'Building'
  },
  {
    number: 12,
    title: 'Responsible Consumption & Production',
    subtitle: 'Ensure sustainable consumption and production patterns',
    color: '#BF8B2E',
    description: 'Transitioning economies toward circularity through industrial symbiosis eco-parks, municipal material recovery facilities (MRF), e-waste recycling concessions, and sustainable public procurement mandates.',
    leadAgency: 'UNEP',
    investmentFocus: '$800 Billion Annual Circular Economy Transition Allocation',
    keyMetrics: ['National recycling rate, tons of material recycled', 'Hazardous waste generated per capita'],
    pppApplication: 'Integrated municipal recycling concessions, hazardous waste incineration BOTs, extended producer responsibility (EPR) logistics networks, and green building standard certifications.',
    targets: [
      'Implement the 10-Year Framework of Programmes on Sustainable Consumption and Production Patterns.',
      'By 2030, achieve the sustainable management and efficient use of natural resources.',
      'By 2030, halve per capita global food waste at the retail and consumer levels and reduce food losses along production and supply chains.',
      'By 2020, achieve the environmentally sound management of chemicals and all wastes throughout their life cycle.',
      'By 2030, substantially reduce waste generation through prevention, reduction, recycling and reuse.',
      'Encourage companies, especially large and transnational companies, to adopt sustainable practices and to integrate sustainability information into their reporting cycle.',
      'Promote public procurement practices that are sustainable, in accordance with national policies and priorities.'
    ],
    subGoals: [
      {
        code: '12.2',
        title: 'Sustainable Management & Efficient Use of Natural Resources',
        officialText: 'By 2030, achieve the sustainable management and efficient use of natural resources.',
        pppMechanism: 'Resource-recovery concessions, industrial water circularity facilities, and mineral tailing reprocessing partnerships.',
        indicators: 'Material footprint and domestic material consumption per capita and per unit of GDP.'
      },
      {
        code: '12.3',
        title: 'Halve Global Food Waste & Supply Chain Losses',
        officialText: 'By 2030, halve per capita global food waste at retail and consumer levels and reduce food losses along production and supply chains, including post-harvest losses.',
        pppMechanism: 'Cold storage logistics hub concessions, food redistribution logistics networks, and commercial composting facilities.',
        indicators: 'Food loss index and food waste index.'
      },
      {
        code: '12.4',
        title: 'Sound Management of Chemicals & Hazardous Wastes',
        officialText: 'By 2020, achieve environmentally sound management of chemicals and all wastes throughout their life cycle, and significantly reduce release to air, water and soil.',
        pppMechanism: 'Hazardous waste high-temperature incineration plants, chemical neutralizer facilities, and medical waste autoclave concessions.',
        indicators: 'Hazardous waste generated per capita and proportion of hazardous waste treated by type of treatment.'
      },
      {
        code: '12.5',
        title: 'Substantially Reduce Waste via 4Rs (Reduce, Reuse, Recycle, Recover)',
        officialText: 'By 2030, substantially reduce waste generation through prevention, reduction, recycling and reuse.',
        pppMechanism: 'Material Recovery Facility (MRF) concessions, automated plastics sorting plants, and tire-derived fuel recovery facilities.',
        indicators: 'National recycling rate and tons of material diverted from landfills.'
      },
      {
        code: '12.6',
        title: 'Corporate Sustainability Reporting & ESG Audits',
        officialText: 'Encourage companies, especially large and transnational companies, to adopt sustainable practices and integrate sustainability information into their reporting cycle.',
        pppMechanism: 'Mandatory GRI/ISSB sustainability reporting compliance covenants in all PPP concession shareholder agreements.',
        indicators: 'Number of companies publishing verified sustainability reports.'
      },
      {
        code: '12.7',
        title: 'Enforce Sustainable Public Procurement (SPP)',
        officialText: 'Promote public procurement practices that are sustainable, in accordance with national policies and priorities.',
        pppMechanism: 'Life-cycle costing (LCC) criteria in all sovereign PPP Union tenders replacing lowest-price bidding with environmental efficiency scoring.',
        indicators: 'Degree of sustainable public procurement policy implementation.'
      }
    ],
    iconName: 'Recycle'
  },
  {
    number: 13,
    title: 'Climate Action',
    subtitle: 'Take urgent action to combat climate change and its impacts',
    color: '#3F7E44',
    description: 'Fortifying national territories with climate-resilient infrastructure, sea level rise defenses, cyclone-rated utility assets, mangrove bio-shields, and innovative catastrophe bond financial risk transfer mechanisms.',
    leadAgency: 'UNFCCC, UNEP, WMO',
    investmentFocus: '$4.3 Trillion Annual Global Climate Adaptation & Mitigation Financing',
    keyMetrics: ['Number of countries with nationally determined contributions (NDCs)', 'Greenhouse gas emissions total per year'],
    pppApplication: 'Climate resilience service contracts, coastal seawall and floodgate concessions, catastrophe risk insurance pools, and carbon offset agro-forestry concessions.',
    targets: [
      'Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries.',
      'Integrate climate change measures into national policies, strategies and planning.',
      'Improve education, awareness-raising and human and institutional capacity on climate change mitigation, adaptation, impact reduction and early warning.',
      'Implement the commitment undertaken by developed-country parties to the UNFCCC to a goal of mobilizing jointly $100 billion annually.',
      'Promote mechanisms for raising capacity for effective climate change-related planning and management in least developed countries and small island developing States.'
    ],
    subGoals: [
      {
        code: '13.1',
        title: 'Strengthen Resilience to Climate Hazards & Disasters',
        officialText: 'Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries.',
        pppMechanism: 'Tide surge barrier concessions, coastal mangrove restoration bio-shields, and automated river basin flood-management gates.',
        indicators: 'Number of deaths, missing persons and directly affected persons attributed to disasters per 100,000 population.'
      },
      {
        code: '13.2',
        title: 'Integrate Climate Policies into National Infrastructure Plans',
        officialText: 'Integrate climate change measures into national policies, strategies and planning.',
        pppMechanism: 'Mandatory climate vulnerability stress-testing and shadow carbon pricing on all project finance models submitted to the PPP Union.',
        indicators: 'Nationally Determined Contributions (NDCs) ambition alignment and long-term net-zero infrastructure roadmaps.'
      },
      {
        code: '13.3',
        title: 'Institutional Capacity & Early Warning Systems',
        officialText: 'Improve education, awareness-raising and human and institutional capacity on climate change mitigation, adaptation, impact reduction and early warning.',
        pppMechanism: 'Meteorological Doppler radar network concessions, satellite remote sensing data hubs, and community SMS alert gateways.',
        indicators: 'Number of countries that have communicated strengthening of institutional, systemic and individual capacity building.'
      },
      {
        code: '13.a',
        title: 'Mobilize $100B+ Annual Climate Finance for Developing States',
        officialText: 'Implement the commitment undertaken by developed-country parties to the UNFCCC to mobilize jointly $100 billion annually from all sources to address developing country needs.',
        pppMechanism: 'Green Climate Fund (GCF) accredited concession co-investments, green bond securitizations, and sovereign debt-for-nature swaps.',
        indicators: 'Amounts of mobilized climate finance from public and private sources.'
      },
      {
        code: '13.b',
        title: 'Build Climate Planning Capacity in LDCs & SIDS',
        officialText: 'Promote mechanisms for raising capacity for effective climate change-related planning and management in least developed countries and small island developing States, focusing on women and youth.',
        pppMechanism: 'Dedicated SIDS coastal protection desks and regional climate resilience sovereign advisory facilities.',
        indicators: 'Number of least developed countries and small island developing States receiving specialized climate adaptation project structuring.'
      }
    ],
    iconName: 'CloudRain'
  },
  {
    number: 14,
    title: 'Life Below Water',
    subtitle: 'Conserve and sustainably use the oceans, seas and marine resources for sustainable development',
    color: '#0A97D9',
    description: 'Safeguarding marine ecosystems and maritime trade through green port concessions, ballast water sterilization infrastructure, marine plastic debris interception booms, and sustainable offshore aquaculture parks.',
    leadAgency: 'UNEP, IMO, FAO',
    investmentFocus: '$175 Billion Annual Marine Conservation & Sustainable Blue Economy',
    keyMetrics: ['Coverage of protected areas in relation to marine areas', 'Progress in degree of implementation of international instruments combating IUU fishing'],
    pppApplication: 'Green port bunkering concessions, ballast water treatment plants, marine plastic harvesting barriers, and sustainable offshore aquaculture mariculture zones.',
    targets: [
      'By 2025, prevent and significantly reduce marine pollution of all kinds, in particular from land-based activities, including marine debris and nutrient pollution.',
      'By 2020, sustainably manage and protect marine and coastal ecosystems to avoid significant adverse impacts, including by strengthening their resilience.',
      'Minimize and address the impacts of ocean acidification, including through enhanced scientific cooperation at all levels.',
      'By 2020, effectively regulate harvesting and end overfishing, illegal, unreported and unregulated fishing and destructive fishing practices.',
      'By 2020, conserve at least 10 per cent of coastal and marine areas, consistent with national and international law.',
      'Increase the economic benefits to Small Island developing States and least developed countries from the sustainable use of marine resources.'
    ],
    subGoals: [
      {
        code: '14.1',
        title: 'Prevent & Reduce Marine Pollution & Ocean Plastics',
        officialText: 'By 2025, prevent and significantly reduce marine pollution of all kinds, in particular from land-based activities, including marine debris and nutrient pollution.',
        pppMechanism: 'River-mouth automated trash interceptor concessions, port reception facilities for ship waste, and coastal stormwater bio-filtration wetlands.',
        indicators: 'Index of coastal eutrophication and plastic debris density.'
      },
      {
        code: '14.2',
        title: 'Protect & Restore Marine & Coastal Ecosystems',
        officialText: 'By 2020, sustainably manage and protect marine and coastal ecosystems to avoid significant adverse impacts, and take action for their restoration.',
        pppMechanism: 'Coral reef artificial propagation concessions, blue carbon credit generating mangrove parks, and marine sanctuary surveillance concessions.',
        indicators: 'Number of countries using ecosystem-based approaches to managing marine areas.'
      },
      {
        code: '14.4',
        title: 'End Overfishing & Illegal, Unreported Fishing (IUU)',
        officialText: 'By 2020, effectively regulate harvesting and end overfishing, illegal, unreported and unregulated (IUU) fishing and destructive fishing practices.',
        pppMechanism: 'Satellite Vessel Monitoring System (VMS) telemetry concessions, digital fish catch traceability portals, and sovereign patrol vessel leases.',
        indicators: 'Proportion of fish stocks within biologically sustainable levels.'
      },
      {
        code: '14.5',
        title: 'Conserve at Least 10% of Coastal & Marine Areas',
        officialText: 'By 2020, conserve at least 10 per cent of coastal and marine areas, consistent with national and international law and best available scientific information.',
        pppMechanism: 'Marine Protected Area (MPA) co-management concessions funded through regulated dive and scientific tourism concessions.',
        indicators: 'Coverage of protected areas in relation to marine areas (exclusive economic zones).'
      },
      {
        code: '14.7',
        title: 'Sustainable Blue Economy for SIDS & LDCs',
        officialText: 'By 2030, increase the economic benefits to Small Island developing States and least developed countries from the sustainable use of marine resources.',
        pppMechanism: 'Sustainable tuna processing and cold chain logistics concessions, ocean thermal energy conversion (OTEC) pilot facilities.',
        indicators: 'Sustainable fisheries as a proportion of GDP in Small Island developing States and least developed countries.'
      }
    ],
    iconName: 'Waves'
  },
  {
    number: 15,
    title: 'Life on Land',
    subtitle: 'Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt biodiversity loss',
    color: '#56C02B',
    description: 'Conserving terrestrial biodiversity, combating desertification, and developing sustainable forestry concessions, eco-corridors with wildlife underpasses along transit lines, and carbon credit-verified reforestation assets.',
    leadAgency: 'UNEP, FAO, UNCCD',
    investmentFocus: '$400 Billion Annual Terrestrial Habitat Conservation & Reforestation Capital',
    keyMetrics: ['Forest area as a proportion of total land area', 'Red List Index measuring aggregate extinction risk'],
    pppApplication: 'Sustainable forestry concessions, ecological wildlife overpasses on highway concessions, payment for watershed conservation, and certified carbon offset trusts.',
    targets: [
      'By 2020, ensure the conservation, restoration and sustainable use of terrestrial and inland freshwater ecosystems and their services, in particular forests, wetlands, mountains and drylands.',
      'By 2020, promote the implementation of sustainable management of all types of forests, halt deforestation, restore degraded forests and substantially increase afforestation and reforestation globally.',
      'By 2030, combat desertification, restore degraded land and soil, including land affected by desertification, drought and floods, and strive to achieve a land degradation-neutral world.',
      'By 2030, ensure the conservation of mountain ecosystems, including their biodiversity, in order to enhance their capacity to provide benefits that are essential for sustainable development.',
      'Take urgent and significant action to reduce the degradation of natural habitats, halt the loss of biodiversity and, by 2020, protect and prevent the extinction of threatened species.',
      'Mobilize and significantly increase financial resources from all sources to conserve and sustainably use biodiversity and ecosystems.'
    ],
    subGoals: [
      {
        code: '15.1',
        title: 'Conserve & Restore Terrestrial & Freshwater Ecosystems',
        officialText: 'By 2020, ensure the conservation, restoration and sustainable use of terrestrial and inland freshwater ecosystems and their services, in particular forests, wetlands and drylands.',
        pppMechanism: 'National park concessions with mandatory conservation and anti-poaching covenants, wetland restoration trusts.',
        indicators: 'Forest area as a proportion of total land area; proportion of important sites for terrestrial and freshwater biodiversity that are covered by protected areas.'
      },
      {
        code: '15.2',
        title: 'Halt Deforestation & Restore Degraded Forests',
        officialText: 'By 2020, promote the implementation of sustainable management of all types of forests, halt deforestation, restore degraded forests and substantially increase afforestation globally.',
        pppMechanism: 'Commercial timber concession agreements mandating FSC certification, selective harvesting cycles, and 3:1 replacement replanting.',
        indicators: 'Progress towards sustainable forest management.'
      },
      {
        code: '15.3',
        title: 'Combat Desertification & Achieve Land Degradation Neutrality',
        officialText: 'By 2030, combat desertification, restore degraded land and soil, including land affected by desertification, drought and floods, and strive to achieve a land degradation-neutral world.',
        pppMechanism: 'The Great Green Wall agro-forestry concessions, soil stabilization and sand dune fixation civil engineering contracts.',
        indicators: 'Proportion of land that is degraded over total land area.'
      },
      {
        code: '15.5',
        title: 'Halt Biodiversity Loss & Prevent Species Extinction',
        officialText: 'Take urgent and significant action to reduce the degradation of natural habitats, halt the loss of biodiversity and protect and prevent the extinction of threatened species.',
        pppMechanism: 'Mandatory wildlife corridors, viaducts, and underpasses embedded inside highway and railway DBFOM concessions.',
        indicators: 'Red List Index measuring extinction risk across taxonomic groups.'
      },
      {
        code: '15.7',
        title: 'End Poaching & Trafficking of Protected Species',
        officialText: 'Take urgent action to end poaching and trafficking of protected species of flora and fauna and address both demand and supply of illegal wildlife products.',
        pppMechanism: 'Drone surveillance and thermal imaging concessions for wildlife reserves, border canine detection units operated via public-private partnerships.',
        indicators: 'Proportion of traded wildlife that was poached or illicitly trafficked.'
      },
      {
        code: '15.a',
        title: 'Mobilize Financial Resources for Biodiversity & Conservation',
        officialText: 'Mobilize and significantly increase financial resources from all sources to conserve and sustainably use biodiversity and ecosystems.',
        pppMechanism: 'Biodiversity offset credits, sovereign green bonds, and conservation trust fund syndications.',
        indicators: 'Official development assistance on conservation and sustainable use of biodiversity.'
      }
    ],
    iconName: 'TreePine'
  },
  {
    number: 16,
    title: 'Peace, Justice & Strong Institutions',
    subtitle: 'Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels',
    color: '#00689D',
    description: 'Upholding integrity in public procurement through open-contracting standards, transparent beneficial ownership registries, independent dispute adjudication boards, and digital anti-corruption governance.',
    leadAgency: 'UNODC, UNDP, OHCHR',
    investmentFocus: '$250 Billion Annual Institutional Governance & Justice Modernization',
    keyMetrics: ['Proportion of persons who had at least one contact with a public official and who paid a bribe', 'Primary government expenditures as a proportion of original approved budget'],
    pppApplication: 'Digital open-book procurement portals, blockchain-verified concession registries, automated court case management concessions, and independent dispute adjudication boards.',
    targets: [
      'Significantly reduce all forms of violence and related death rates everywhere.',
      'End abuse, exploitation, trafficking and all forms of violence against and torture of children.',
      'Promote the rule of law at the national and international levels and ensure equal access to justice for all.',
      'By 2030, significantly reduce illicit financial and arms flows, strengthen the recovery and return of stolen assets and combat all forms of organized crime.',
      'Substantially reduce corruption and bribery in all their forms.',
      'Develop effective, accountable and transparent institutions at all levels.',
      'Ensure responsive, inclusive, participatory and representative decision-making at all levels.',
      'By 2030, provide legal identity for all, including birth registration.'
    ],
    subGoals: [
      {
        code: '16.3',
        title: 'Promote Rule of Law & Equal Access to Justice',
        officialText: 'Promote the rule of law at the national and international levels and ensure equal access to justice for all.',
        pppMechanism: 'Digital court case management concessions, e-filing portals, and dispute adjudication boards guaranteeing enforceable contractual arbitrations under UNCITRAL rules.',
        indicators: 'Proportion of victims of violence who reported their victimization to competent authorities.'
      },
      {
        code: '16.4',
        title: 'Reduce Illicit Financial & Arms Flows & Recover Stolen Assets',
        officialText: 'By 2030, significantly reduce illicit financial and arms flows, strengthen the recovery and return of stolen assets and combat all forms of organized crime.',
        pppMechanism: 'Public-private financial intelligence sharing platforms, automated anti-money laundering (AML) blockchain tracking concessions.',
        indicators: 'Total value of inward and outward illicit financial flows in current US dollars.'
      },
      {
        code: '16.5',
        title: 'Substantially Reduce Corruption & Bribery',
        officialText: 'Substantially reduce corruption and bribery in all their forms.',
        pppMechanism: 'Open Contracting Data Standard (OCDS) compliant digital portals, mandatory integrity pacts signed by all bidders and procurement officials.',
        indicators: 'Proportion of businesses that paid a bribe to a public official or were asked for a bribe during the previous 12 months.'
      },
      {
        code: '16.6',
        title: 'Develop Effective, Accountable & Transparent Institutions',
        officialText: 'Develop effective, accountable and transparent institutions at all levels.',
        pppMechanism: 'Open-book accounting frameworks embedded in concession agreements allowing sovereign auditors real-time visibility into project company cash flows.',
        indicators: 'Primary government expenditures as a proportion of original approved budget.'
      },
      {
        code: '16.7',
        title: 'Ensure Responsive, Inclusive & Participatory Governance',
        officialText: 'Ensure responsive, inclusive, participatory and representative decision-making at all levels.',
        pppMechanism: 'Mandatory civic stakeholder town halls and Free, Prior and Informed Consent (FPIC) verification before financial close on infrastructure concessions.',
        indicators: 'Proportions of positions in national and local public institutions held by diverse demographic groups.'
      },
      {
        code: '16.9',
        title: 'Universal Legal Identity & Digital Birth Registration',
        officialText: 'By 2030, provide legal identity for all, including birth registration.',
        pppMechanism: 'National digital identity infrastructure concessions, biometric civic registration networks, and vital statistics digitalization.',
        indicators: 'Proportion of children under 5 years of age whose births have been registered with a civil authority.'
      },
      {
        code: '16.10',
        title: 'Public Access to Information & Protect Fundamental Freedoms',
        officialText: 'Ensure public access to information and protect fundamental freedoms, in accordance with national legislation and international agreements.',
        pppMechanism: 'Public transparency disclosure portals publishing full unredacted PPP concession contracts, performance audit reports, and tariff formulas.',
        indicators: 'Number of countries that adopt and implement constitutional, statutory and/or policy guarantees for public access to information.'
      }
    ],
    iconName: 'Gavel'
  },
  {
    number: 17,
    title: 'Partnerships for the Goals',
    subtitle: 'Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development',
    color: '#19486A',
    description: 'The foundational purpose of the PPP Union: blending multilateral development finance, sovereign credit enhancements, private institutional investment, and civil society oversight to achieve the 2030 Agenda.',
    leadAgency: 'UN-DESA, UNECE, UNCTAD, World Bank, OECD',
    investmentFocus: '$4.2 Trillion Annual Developing Country SDG Infrastructure Gap',
    keyMetrics: ['Volume of remittances as a proportion of total GDP', 'Net official development assistance as a proportion of OECD/DAC gross national income', 'Volume of private co-investment mobilized for SDGs'],
    pppApplication: 'PPP Union global coordination desk, UNECE People-First project accreditation, blended finance guarantee syndications, cross-border multi-stakeholder partnerships, and SDG-linked green bond issuances.',
    targets: [
      'Strengthen domestic resource mobilization, including through international support to developing countries, to improve domestic capacity for tax and other revenue collection.',
      'Developed countries to implement fully their official development assistance commitments, including the commitment by many developed countries to achieve the target of 0.7 per cent of ODA/GNI.',
      'Mobilize additional financial resources for developing countries from multiple sources.',
      'Assist developing countries in attaining long-term debt sustainability through coordinated policies aimed at fostering debt financing, debt relief and debt restructuring.',
      'Adopt and implement investment promotion regimes for least developed countries.',
      'Enhance North-South, South-South and triangular regional and international cooperation on and access to science, technology and innovation.',
      'Promote the development, transfer, dissemination and diffusion of environmentally sound technologies to developing countries on favorable terms.',
      'Encourage and promote effective public, public-private and civil society partnerships, building on the experience and resourcing strategies of partnerships.'
    ],
    subGoals: [
      {
        code: '17.1',
        title: 'Domestic Resource Mobilization & Tax Administration',
        officialText: 'Strengthen domestic resource mobilization, including through international support to developing countries, to improve domestic capacity for tax and other revenue collection.',
        pppMechanism: 'Automated tax administration and digital customs clearance concessions minimizing leakage and expanding sovereign fiscal space.',
        indicators: 'Total government revenue as a proportion of GDP, by source.'
      },
      {
        code: '17.3',
        title: 'Mobilize Additional Financial Resources (Blended Finance)',
        officialText: 'Mobilize additional financial resources for developing countries from multiple sources.',
        pppMechanism: 'First-loss capital tranches, political risk insurance, and blended finance guarantee syndications led by the PPP Union.',
        indicators: 'Foreign direct investment (FDI), official development assistance and blended private capital mobilized for SDGs.'
      },
      {
        code: '17.4',
        title: 'Ensure Long-Term Sovereign Debt Sustainability',
        officialText: 'Assist developing countries in attaining long-term debt sustainability through coordinated policies aimed at fostering debt financing, debt relief and debt restructuring.',
        pppMechanism: 'Non-recourse project financing and off-balance sheet PPP structures preventing sovereign debt-to-GDP distress.',
        indicators: 'Debt service as a proportion of exports of goods and services.'
      },
      {
        code: '17.5',
        title: 'Adopt Investment Promotion Regimes for LDCs',
        officialText: 'Adopt and implement investment promotion regimes for least developed countries.',
        pppMechanism: 'Standardized PPP concession laws, bilateral investment treaty alignment, and sovereign one-stop investment facilitation desks.',
        indicators: 'Number of national investment promotion regimes actively marketing bankable SDG projects.'
      },
      {
        code: '17.6',
        title: 'North-South & South-South Science & Tech Cooperation',
        officialText: 'Enhance North-South, South-South and triangular regional and international cooperation on and access to science, technology and innovation.',
        pppMechanism: 'Knowledge transfer pacts embedded in international infrastructure concessions, cross-border research exchanges.',
        indicators: 'Fixed Internet broadband subscriptions per 100 inhabitants, by speed tier.'
      },
      {
        code: '17.7',
        title: 'Transfer Environmentally Sound Technologies',
        officialText: 'Promote the development, transfer, dissemination and diffusion of environmentally sound technologies to developing countries on favorable terms.',
        pppMechanism: 'Technology licensing partnerships and patent-clearing concessions for clean energy and wastewater treatment.',
        indicators: 'Total amount of funding for developing countries to promote the development, transfer and diffusion of green tech.'
      },
      {
        code: '17.9',
        title: 'International Capacity-Building for National SDG Plans',
        officialText: 'Enhance international support for implementing effective and targeted capacity-building in developing countries to support national plans to implement all the Sustainable Development Goals.',
        pppMechanism: 'PPP Union Facilitators Network providing certified executive training for government ministers and procurement directors.',
        indicators: 'Dollar value of financial and technical assistance committed to developing countries.'
      },
      {
        code: '17.14',
        title: 'Enhance Policy Coherence for Sustainable Development (PCSD)',
        officialText: 'Enhance policy coherence for sustainable development across all governmental departments and regulatory authorities.',
        pppMechanism: 'Inter-ministerial PPP units coordinating across finance, planning, environment, and line ministries.',
        indicators: 'Number of countries having mechanisms in place to enhance policy coherence of sustainable development.'
      },
      {
        code: '17.16',
        title: 'Revitalize Multi-Stakeholder Global Partnerships',
        officialText: 'Enhance the Global Partnership for Sustainable Development, complemented by multi-stakeholder partnerships that mobilize and share knowledge, expertise, technology and financial resources.',
        pppMechanism: 'The PPP Union global alliance bringing together UNECE, sovereign governments, institutional lenders, and engineering consortiums.',
        indicators: 'Progress in multi-stakeholder development effectiveness monitoring frameworks.'
      },
      {
        code: '17.17',
        title: 'Promote Effective Public-Private-Civil Society Partnerships',
        officialText: 'Encourage and promote effective public, public-private and civil society partnerships, building on the experience and resourcing strategies of partnerships.',
        pppMechanism: 'The core mission of the PPP Union: scaling UNECE People-First PPP models delivering value-for-people and value-for-planet across the 17 SDGs.',
        indicators: 'Amount in United States dollars committed to public-private partnerships for infrastructure.'
      },
      {
        code: '17.19',
        title: 'Develop Measures of Progress Beyond GDP',
        officialText: 'By 2030, build on existing initiatives to develop measurements of progress on sustainable development that complement gross domestic product, and support statistical capacity-building.',
        pppMechanism: 'The UNECE PIERS (People-First PPP Evaluation and Rating System) scoring platform, measuring environmental, social, and human resilience outcomes.',
        indicators: 'Dollar value of all resources made available to strengthen statistical capacity in developing countries.'
      }
    ],
    iconName: 'Handshake'
  }
];

export function getSdgByCategory(category: 'all' | 'people' | 'prosperity' | 'planet' | 'partnership'): SDGItem[] {
  if (category === 'all') return COMPREHENSIVE_17_SDGS;
  if (category === 'people') return COMPREHENSIVE_17_SDGS.filter((s) => s.number >= 1 && s.number <= 6);
  if (category === 'prosperity') return COMPREHENSIVE_17_SDGS.filter((s) => s.number >= 7 && s.number <= 11);
  if (category === 'planet') return COMPREHENSIVE_17_SDGS.filter((s) => s.number >= 12 && s.number <= 15);
  if (category === 'partnership') return COMPREHENSIVE_17_SDGS.filter((s) => s.number >= 16 && s.number <= 17);
  return COMPREHENSIVE_17_SDGS;
}

export function getSdgByNumber(num: number): SDGItem | undefined {
  return COMPREHENSIVE_17_SDGS.find((s) => s.number === num);
}
