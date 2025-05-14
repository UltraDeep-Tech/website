// lang.js

const translations = {
  en: {
    // Navbar principal
    about_us:               "About Us",
    products:               "Products",
    services:               "Services",
    career:                 "Career",
    contact_us:             "Contact Us",

    // Dropdown About Us
    company_history:        "Company History",
    leadership_team:        "Leadership Team",
    youtube_channel:        "Youtube Channel",
    blog_social:            "Blog & Social Media",

    // Dropdown Products
    safety_shield:          "Safety Shield Ultra™",
    ai_model_suite:         "AI Model Protection Suite",
    enterprise_security:    "Enterprise AI Security",
    performance_optimization: "AI Performance Optimization",

    // Dropdown Services
    ai_assessment:          "AI Security Assessment & Strategy",
    implementation:         "Implementation & Architecture",
    training_education:     "Training & Education",

    // CTA y botones
    get_started:            "Get Started",
    secure_your_ai:         "Secure Your AI",
    see_it_in_action:       "See It in Action",
    book_a_call:            "Book a Call",
    visit_our_blog:         "Visit Our Blog",
    see_all_videos:         "See All Videos",
    have_question:          "Have a Question? Write Us",
    getCertifiedNow:"Get Certified Now",
    // Hero / Banner AI
    hero_title:             "We secure your AI",
    hero_subtitle:          "Protect Your AI\nFrom Modern Threats",
    hero_tagline:           "Discover Safety Shield Ultra™",
    hero_description:       "Defend your conversational AI against prompt injection and data leaks.\nSee how Safety Shield Ultra™ keeps your AI interactions secure in real time.",


    btn_details:"See More Details",

    // Products section
    products_section_title: "Products",
    products_section_sub:   "Discover enterprise-grade AI tools crafted for security, scalability, and performance.",
    learn_more:             "Learn more",
    product1_title:         "Safety Shield Ultra™",
    product1_desc:          "Real-time defense against prompt injection, leakage & model hijacking.",
    product2_title:         "AI Model Protection Suite",
    product2_desc:          "Prevent reverse engineering and misuse of your proprietary AI models.",
    product3_title:         "Enterprise AI Security",
    product3_desc:          "Comprehensive protection with encryption, access control, and audits.",
    product4_title:         "AI Performance Optimization",
    product4_desc:          "Boost latency, accuracy & cost-efficiency with model optimization tools.",

    // Services section
    services_section_title: "Services",
    services_section_sub:   "Protect and optimize your AI infrastructure with our assessment, implementation and training services.",
    ai_assessment_desc:     "Security evaluation and strategic planning for AI systems. Our team conducts assessments and develops security strategies.",
    implementation_desc:    "Design and implementation of secure AI architectures. We ensure your infrastructure is built and maintained securely.",
    training_education_desc:"Training programs to build your team's AI security expertise, from basics to advanced practices.",

    // CTA upgrade
    cta_upgrade_title:      "Ready to Transform Your AI Capabilities?",
    cta_upgrade_sub:        "Don't miss AI Security Opportunities.",
    cta_upgrade_btn:        "Contact Us",

    // Blog & videos
    blog_videos_title:      "Want to dive deeper into AI and tech insights?",
    blog_videos_sub:        "Explore our blog for in-depth articles, analysis, and the latest in AI innovation.",

    // Footer
    useful_links:           "Useful Links",
    footer_products:        "Products",
    footer_services:        "Services",
    footer_contact:         "Contact Us",
    footer_about_text:      "Securing enterprise AI with measurable results. Schedule a demo to see your risk exposure.",
    footer_address:         "Corrientes 800, Ciudad Autónoma de Buenos Aires, CP1008, Argentina",
    footer_phone:           "Phone",
    footer_email:           "Email",
    social_instagram:       "Instagram",
    social_linkedin:        "LinkedIn",
    social_youtube:         "YouTube",
    social_tiktok:          "TikTok",
    copyright:              "All Rights Reserved",
    designed_by:            "Designed by",

    // Cookies
    cookie_text:            "This website uses cookies to enhance your user experience. By continuing to browse, you agree to our Cookie Policy. You can adjust your browser settings to manage or disable cookies.",
    accept:                 "Accept",
    deny:                   "Deny",

    // About page
    about_page_title:       "About",
    home:                   "Home",
    about_page_current:     "About",
    company_history_title:  "Company History",
    company_history_p1:     "Ultra Deep Tech was founded in 2023 by security professionals and AI specialists with 15+ years of combined experience in enterprise AI. Our founders witnessed the security gaps as organizations adopted AI without adequate protection. Drawing from backgrounds securing critical systems at Fortune 500 companies and addressing vulnerabilities in early machine learning implementations, we established Ultra Deep Tech to secure AI across enterprise environments.",
    company_history_p2:     "Our leadership team has navigated AI security challenges since the early deep learning boom, giving us insight into current and emerging threats. We leverage this technical knowledge to address the full spectrum of AI vulnerabilities—from model poisoning to prompt injection to data exfiltration—with the urgency modern enterprises require.",
    brands_title:           "Brands that trust us",
    leadership_team_title:  "Leadership Team",
    avi_pilcer_name:        "Avi Pilcer",
    avi_pilcer_role:        "CEO and Chief Scientist",
    avi_pilcer_bio:         "AI expert, former tech advisor to Israeli intelligence. 15+ years pioneering AI and cybersecurity. Former AI Director at Motorola Solutions. Serial entrepreneur.",
    guido_galicer_name:     "Guido Galicer",
    guido_galicer_role:     "Product / Strategy",
    guido_galicer_bio:      "Founder of Habla Agency. Proven track record in marketing companies to multi-million dollar valuations. Strategist with strong education and global perspective.",
    karla_lemoine_name:     "Karla Lemoine",
    karla_lemoine_role:     "Legal and Operations Lead",
    karla_lemoine_bio:      "Law and HR expert. Ensures regulatory compliance and operational efficiency. Strong communicator.",
    sasha_daich_name:       "Sasha Daich",
    sasha_daich_role:       "VP Business Development",
    sasha_daich_bio:        "7.18× revenue generation in 2.5 years at Forter, now at a valuation of $3.3 B. Expert in strategic growth and market expansion.",
    maximilian_acri_name:   "Maximilian Acri",
    maximilian_acri_role:   "Tech Lead",
    maximilian_acri_bio:    "Technology expert. Developed numerous applications and platforms serving millions daily. Leads with technical mastery.",
    luciano_camano_name:    "Luciano Camano",
    luciano_camano_role:    "Strategic Partnerships Manager",
    luciano_camano_bio:     "Brings extensive expertise in enterprise AI security solutions, forging high-impact relationships with industry leaders in highly regulated organizations.",

    // Dynamic “Product Details”
    product_details_title:  "Product Details",
    product_list_title:     "Products List",
    product1_link:          "Safety Shield Ultra™",
    product2_link:          "Model Protection Suite",
    product3_link:          "Enterprise Security",
    product4_link:          "Performance Optimization",
    help_box_title:         "Have a Question?",
    help_box_phone:         "+54 9 11 5992 9083",
    help_box_email:         "contact@ultradeeptech.com",

    // Product content (script)
    product1_default_title:  "Government & Enterprise AI Solutions",
    product1_content_title:  "Safety Shield Ultra™",
    product1_content_desc:   "Safety Shield Ultra™ is an intelligent, real-time security platform specifically engineered to protect virtual assistants and AI chatbots from adversarial attacks and malicious inputs. It continuously monitors AI interactions and instantly blocks suspicious behavior, ensuring privacy and compliance at every step.",
    product1_feat1:          "Real-time malicious prompt filtering",
    product1_feat2:          "Jailbreak & injection threat prevention",
    product1_feat3:          "Continuous anomaly monitoring",
    product1_feat4:          "Customizable security controls",
    product1_feat5:          "Automated compliance with GDPR, ISO",
    product1_default_core_label: "Core Solutions:",
    product2_content_title:  "Model Protection Suite",
    product2_content_desc:   "Designed for tech teams seeking to safeguard their models’ internal logic while preserving explainability and data confidentiality. The suite leverages cutting-edge anonymization, adversarial defense, and interpretability frameworks to maximize trust and performance.",
    product2_feat1:          "Explainability through advanced XAI tools",
    product2_feat2:          "Robust data anonymization pipelines",
    product2_feat3:          "Adversarial attack prevention",
    product2_feat4:          "Full-stack AI security benchmarking",

    product3_content_title:  "Enterprise Security",
    product3_content_desc:   "Tailored for large-scale deployments in regulated industries, this solution helps organizations enforce security policies, perform risk assessments, and rapidly respond to threats using AI-driven insights. Ideal for financial institutions, government, and critical infrastructure.",
    product3_feat1:          "AI-specific risk evaluations",
    product3_feat2:          "Integration with GRC frameworks",
    product3_feat3:          "Real-time security monitoring",
    product3_feat4:          "Automated incident response with generative AI",

    product4_content_title:  "Performance Optimization",
    product4_content_desc:   "Performance Optimization delivers measurable gains in AI processing speed, cost-efficiency, and cloud scalability. Ideal for production-grade systems needing to scale intelligently while maintaining top-tier security.",
    product4_feat1:          "Production-ready model compression",
    product4_feat2:          "Live performance and latency benchmarking",
    product4_feat3:          "Cloud resource optimization",
    product4_feat4:          "Intelligent cost-saving strategies",

    // Industries Section
    industries_title:        "Industries at Risk",
    industries_subtitle:     "Critical Statistics Across Key Sectors",
    industry1_title:         "Financial Services",
    industry1_stats:         "• 78% of financial firms face AI security breaches\n• $2.5 M average cost per breach\n• 45% of AI systems vulnerable to attacks\n• 60% compliance violations in AI systems",
    industry2_title:         "Healthcare",
    industry2_stats:         "• 85% of healthcare AI systems exposed\n• $1.2 M average breach cost\n• 70% patient data at risk\n• 50% HIPAA violations in AI",
    industry3_title:         "E-commerce",
    industry3_stats:         "• 92% of e-commerce AI systems attacked\n• $3.8 M average fraud loss\n• 65% customer data exposed\n• 55% revenue loss from breaches",
    visit_our_blog:           "Visit Our Blog",
    see_all_videos:           "See All Videos",
    terms_of_service:         "Terms of Service",
    privacy_policy:           "Privacy Policy",

    services_details_title:   "Services Details",
    services_details_current: "Services Details",
    services_list_title:      "Service List",
    help_title:               "Have a Question?",
    help_box_phone:           "+54 9 11 5992 9083",
    help_box_email:           "contact@ultradeeptech.com",
    services_default_title:   "Government & Enterprise AI Security Services",
    core_services_label:      "Core Services:",
    coverage_label:           "Coverage:",
    coverage1:                "Security Assessment",
    coverage2:                "Architecture Design",
    coverage3:                "Compliance Management",
    coverage4:                "Monitoring & Support",
    coverage5:                "Incident Response",

    service1_feat1:           "Vulnerability Assessment",
    service1_feat2:           "Security Analysis",
    service1_feat3:           "Compliance Management",
    service1_feat4:           "Executive Consulting",

    service2_feat1:           "Security Architecture",
    service2_feat2:           "Controls Deployment",
    service2_feat3:           "Integration Planning",
    service2_feat4:           "Access Management",
    service2_feat5:           "Security Monitoring",
    service2_feat6:           "Incident Response",
    service2_feat7:           "Performance Analytics",

    service3_feat1:           "Custom Training",
    service3_feat2:           "Hands-on Workshops",
    service3_feat3:           "Security Best Practices",
    service3_feat4:           "Team Certification",
    contact_page_title:        "Contact",
    breadcrumbs_home:          "Home",
    breadcrumbs_current:       "Contact",

    faq_section_title:         "FAQ's",
    faq_q1:                    "What is Ultra Deep Tech's core focus?",
    faq_a1:                    "Ultra Deep Tech provides AI security solutions and services. Our platform, Safety Shield Ultra™, delivers real-time protection for AI conversations, models, and infrastructure, ensuring your systems remain secure and compliant. We also offer AI consulting and implementation services to help businesses deploy secure AI solutions across all environments.",

    faq_q2:                    "What specific security services do you provide?",
    faq_a2_intro:              "Our security services cover the complete AI protection lifecycle:",
    faq_a2_li1:                "AI security monitoring and protection",
    faq_a2_li2:                "Model security assessment",
    faq_a2_li3:                "AI governance and compliance",
    faq_a2_li4:                "Data protection",
    faq_a2_li5:                "Infrastructure security",
    faq_a2_li6:                "Security training",
    faq_a2_li7:                "AI consulting and implementation",

    faq_q3:                    "How does your security approach differ from traditional security providers?",
    faq_a3_intro:              "Our approach is specifically designed for AI systems:",
    faq_a3_li1:                "AI-first security architecture",
    faq_a3_li2:                "Real-time AI monitoring",
    faq_a3_li3:                "AI-specific threat protection",
    faq_a3_li4:                "Automated security controls",
    faq_a3_li5:                "Continuous AI threat adaptation",
    faq_a3_li6:                "AI compliance coverage",

    faq_q4:                    "What security standards and compliance do you support?",
    faq_a4_intro:              "Our solutions align with key security standards:",
    faq_a4_li1:                "ISO 27001 for information security",
    faq_a4_li2:                "GDPR and data privacy regulations",
    faq_a4_li3:                "NIST AI Risk Management Framework",
    faq_a4_li4:                "Industry-specific compliance requirements",
    faq_a4_li5:                "AI-specific security guidelines",
    faq_a4_li6:                "Cloud security standards",
    faq_a4_tail:               "We ensure your AI systems meet all relevant security and compliance requirements.",

    faq_q5:                    "How does Safety Shield Ultra™ handle incidents?",
    faq_a5_intro:              "Safety Shield Ultra™ provides automated incident response:",
    faq_a5_ol1:                "Continuous AI monitoring",
    faq_a5_ol2:                "Automated alerts",
    faq_a5_ol3:                "Real-time analysis",
    faq_a5_ol4:                "Automated containment",
    faq_a5_ol5:                "Incident logging",
    faq_a5_ol6:                "Security updates",

    faq_q6:                    "What makes your solutions scalable?",
    faq_a6_intro:              "Our architecture supports enterprise deployment:",
    faq_a6_li1:                "Cloud-native controls",
    faq_a6_li2:                "Automated scaling",
    faq_a6_li3:                "Centralized management",
    faq_a6_li4:                "Multi-environment support",
    faq_a6_li5:                "API integration",
    faq_a6_li6:                "Flexible deployment",
    faq_a6_tail:               "We ensure your security grows with your AI infrastructure.",

    faq_q7:                    "How do you maintain security?",
    faq_a7_intro:              "We maintain security through:",
    faq_a7_li1:                "Regular assessments",
    faq_a7_li2:                "Threat updates",
    faq_a7_li3:                "Patch management",
    faq_a7_li4:                "Performance optimization",
    faq_a7_li5:                "Security training updates",
    faq_a7_li6:                "Compliance monitoring",
    faq_a7_tail:               "Our security evolves with emerging threats and new AI technologies.",

    contact_address_title:     "Address",
    contact_address_text:      "Corrientes 800, Ciudad Autónoma de Buenos Aires",
    contact_call_title:        "Call or Text Us",
    contact_call_number:       "+54 (9) 11 7645-5965",
    contact_email_title:       "Email Us",
    contact_email:             "contact@ultradeeptech.com",

    form_name_placeholder:     "Your Name",
    form_email_placeholder:    "Your Email",
    form_subject_placeholder:  "Subject",
    form_message_placeholder:  "Message",
    form_send_button:          "Send Message",
    form_loading:              "Loading...",
    form_error_message:        "There was an error sending your message.",
    form_sent_message:         "Your message has been sent. Thank you!",
    career_page_title:       "Career",
    breadcrumbs_home:        "Home",
    breadcrumbs_current:     "Career",

    career_openings_title:   "Current Job Openings",
    career_openings_cta:     "See all our offers in LinkedIn",
    career_openings_desc:    "Discover top job opportunities on our LinkedIn! Follow us here for daily updates and exclusive openings.",
    career_openings_link:    "See in Linked In",

    // Core Recruiting Values
    values_title:            "Core Recruiting Values",
    values_subtitle:         "Guiding principles that drive our recruiting decisions.",

    // Each core value
    value_excellence_title:  "Excellence",
    value_excellence_desc:   "Strive for the highest standards in all tasks.",
    value_passion_title:     "Passion",
    value_passion_desc:      "Work with enthusiasm and dedication.",
    value_cutting_edge_title:"Avant-garde and Cutting Edge",
    value_cutting_edge_desc: "Embrace innovative and forward-thinking approaches.",
    value_hard_working_title:"Hard-Working",
    value_hard_working_desc: "Put in the effort to achieve exceptional results.",
    value_result_oriented_title: "Result-Oriented",
    value_result_oriented_desc:  "Focus on achieving measurable outcomes.",
    value_overcoming_title:  "Overcoming Expectations",
    value_overcoming_desc:   "Go beyond the anticipated results.",
    value_world_change_title:"Changing the World",
    value_world_change_desc: "Contribute to meaningful and impactful projects.",
    value_ownership_title:   "Agency and Ownership",
    value_ownership_desc:    "Take initiative and responsibility for your work.",
    value_integrity_title:   "Transparent Communication and Integrity",
    value_integrity_desc:    "Communicate openly and act with honesty.",
    value_organization_title:"Good Organization",
    value_organization_desc: "Maintain a structured and efficient work environment.",
    value_can_do_title:      "Can-Do Attitude",
    value_can_do_desc:       "Approach challenges with optimism and determination.",
    blog_social_page_title:  "Blog & Social Media",
    blog_social_page_current:"Blog & Social Media",
    cta_linkedin:            "Check Our Recent Posts",
    cta_instagram:           "Check Our Instagram",
    // Highlights dinámicos (inglés)
    product1_highlight: "Next-gen defense for conversational AI systems.",
    product2_highlight: "Shield your AI models without sacrificing transparency.",
    product3_highlight: "Enterprise-grade protection for high-stakes AI environments.",
    product4_highlight: "Boost speed and cut costs—without compromising safety.",
    current_job_openings:"Current Job Openings",
    core_values:"Core Values",
    faqs:"FAQ's",
    office_locations:"Office Locations",
    chat_with_us:"Chat with us",
  // “Por Qué Elegirnos” Section
  why_title:            "Why Choose Us?",
  why_desc:             "Discover how Ultra Deep Tech can elevate your team’s security and ensure your organization’s success.",
  why_experts_title:    "Recognized Experts",
  why_experts_desc:     "We have certified professionals with extensive AI and cybersecurity experience ready to guide your team.",
  why_solutions_title:  "Tailored Solutions",
  why_solutions_desc:   "We design training plans customized to your organization’s needs and objectives.",
  why_impact_title:     "Tangible Impact",
  why_impact_desc:      "Our programs improve your team’s ability to prevent risks and optimize security processes.",
  why_cta_text:         "Ready to strengthen your team? ",
  why_cta_contact:      "Contact Us",
  why_cta_button:       "Get in Touch",

  // “Certificaciones que obtendrás” Section
  certs_obtendras_title: "Certifications You’ll Earn",
  certs_obtendras_desc:  "Graduates like Diego, Valentina, and Martín are already applying their skills at leading organizations.",
  cert_obt1:             "AISP – AI Security Professional",
  cert_obt2:             "CAISE – Certified AI Security Expert",
  cert_obt3:             "AIGP – AI Governance Professional",

  // Testimonials Section
  testimonials_title:         "Testimonials",
  testimonials_desc:          "What our graduates say after certifying with Ultra Deep Tech",
  testimonials_pablo_text:    "“Ultra Deep Tech’s AISP certification elevated my professional profile in the public sector.”",
  testimonials_valentina_text:"“Thanks to CAISE training, I now lead AI audits with full confidence and rigor.”",
  testimonials_camila_text: "The AISP certification gave me practical tools to enhance the security of our AI systems.",
  // Footer disclaimer
  disclaimer_text: "The logos shown on this site reflect alignment with international standards, pending alliance applications, or in-house certifications legally issued by our institution. We claim no official accreditation unless expressly stated.",
  title_courses: "AI Security Courses – Government, Banks, and Businesses | Ultra-Deep Computing Technology",

    // Hero / Banner
    hero_title1:        "AI Security Training for Governments and Enterprises",
    hero_subtitle1:     "Equip your team with courses designed to ensure compliance, privacy, and resilience against AI threats.",
    hero_cta:           "See More",
  
    // About
    about_video_link:   "Watch Video",
    about_formationheader: "Certified AI Security Training",
    about_formation:  "At Ultra Deep Tech we combine expertise, professional certifications, and strategic alliances to deliver elite AI security training:",
  
    // Certificados
    certs_aisp_title:   "AISP, CAISE, and AIGP Certifications",
    certs_aisp_desc:    "In-house diplomas validating advanced competencies in threat detection, governance, and AI protection.",
    certs_isc_title:    "Alliances with ISC², EC-Council, CESSI, and Fintech",
    certs_isc_desc:     "Official training backed by leaders in cybersecurity and financial technology.",
    certs_iso_title:    "Alignment with ISO, NIST, UNESCO, and OECD",
    certs_iso_desc:     "Programs designed according to international AI security and ethics standards.",
    certs_methodology_title: "Practical and Customized Methodology",
    certs_methodology_desc:  "Exercises and case studies tailored to your organization’s challenges to ensure real-world results.",
  

    // Cert Section
    cert_section_title: "Train your team with our Certifications",
    cert1_name:         "AI Security Professional",
    cert1_desc:         "With the AISP certification, your company will demonstrate to clients, investors, and auditors that you have a team capable of anticipating and neutralizing AI-based cyber threats, strengthening institutional trust and ensuring operational continuity.",
    cert1_code:         "AISP-80012-ARG",
    cert2_name:         "AI Security Expert",
    cert2_desc:         "The CAISE program trains your leaders in advanced AI defense and auditing techniques, providing a strategic edge in high-complexity bids and projects, and ensuring the highest regulatory compliance.",
    cert2_code:         "CAISE-50045-ARG",
    cert3_name:         "AI Governance Professional",
    cert3_desc:         "AIGP trains your senior management in designing and implementing AI governance, setting policies and metrics to ensure transparency, accountability, and alignment with international standards—crucial for corporate reputation.",
    cert3_code:         "AIGP-61008-ARG",
  
    // Stats
    stats_courses:      "Courses Delivered",
    stats_participants: "Participants Trained",
    stats_hours:        "Training Hours",
    stats_certificates: "Certificates Issued",
  
    // CTA
    cta_title:          "Don’t Wait Any Longer",
    cta_desc:           "Take the next step to protect and certify your team in AI security.\nBoost your customers’ confidence and strengthen your corporate reputation!",
    cta_button:         "Get Certified Now",
  
    // Alliances
    alliances_title:    "Alliances & Memberships",
    alliances_desc:     "We combine our Active Member status and ongoing applications to endorse and provide training with these institutions:",
    alliance_isc:       "ISC²",
    alliance_isc_desc:  "Applying to offer the official CISSP and CCSP courses endorsed by ISC² to train your teams at the highest level of security.",
    alliance_ec:        "EC-Council",
    alliance_ec_desc:   "Applying to deliver the CEH and CND programs with official EC-Council certification, ensuring practical experience and recognized accreditation.",
    alliance_cessi:     "CESSI",
    alliance_cessi_desc:"Active member of CESSI, the Chamber of Software and IT Services Companies, which endorses our workshops and seminars.",
    alliance_fintech:   "Argentine Fintech Chamber",
    alliance_fintech_desc:"Member of the Argentine Fintech Chamber, providing essential support for our financial AI security training.",
  
    // Alignment
    alignment_title:     "International Guidelines",
    alignment_desc:      "Our certifications are developed following industry best practices and global standards.",
    alignment_iso:       "ISO/IEC 27001",
    alignment_iso_desc:  "We follow the information security controls and processes defined by ISO/IEC 27001.",
    alignment_nist:      "NIST AI Risk Management Framework",
    alignment_nist_desc: "We align with the NIST AI Risk Management Framework to ensure integrity and reliability.",
    alignment_unesco:    "UNESCO AI Ethics",
    alignment_unesco_desc:"We adopt UNESCO’s AI Ethics recommendations to promote responsible use of technology.",
    alignment_oecd:      "OECD AI Principles",
    alignment_oecd_desc: "We incorporate the OECD AI Principles to ensure transparency, fairness, and safety.",
    cursos:"Courses",

// cta
certifications_cta_title:       "Certifications",
certifications_cta_desc:        "Validate your skills with our industry-recognized certificates.",
certifications_cta_button:      "Get Certified Now",

  cta_title1: "Boost Your Organization’s Security",
  cta_desc1: "Empower your team with our certified AI Security courses, designed specifically for Governments, Banks, and Large Enterprises.",
  cta_button1: "Enroll Now",

      // Common
    CommonCloseLabel: "Close",
    CommonClose: "Close",
    CommonRequestInfo: "Request information",

    // AISP
    AISPmodalTitle: "AI Security Professional (AISP)",
    AISPformatLabel: "Format:",
    AISPformatValue: "3-day intensive workshop (9:00-13:00 each day)",
    AISPday1Title: "Day 1: AI Security Foundations",
    AISPday1Item1: "AI/ML architecture vulnerabilities",
    AISPday1Item2: "Threat landscape overview",
    AISPday1Item3: "Risk assessment frameworks",
    AISPday1Item4: "Lab: Vulnerability identification exercises",
    AISPday2Title: "Day 2: Attack Vectors & Controls",
    AISPday2Item1: "Data poisoning & adversarial attacks",
    AISPday2Item2: "Prompt injection vulnerabilities",
    AISPday2Item3: "Implementation of defensive controls",
    AISPday2Item4: "Lab: Defensive measure implementation",
    AISPday3Title: "Day 3: Deployment & Response",
    AISPday3Item1: "Secure deployment pipelines",
    AISPday3Item2: "Incident detection & response",
    AISPday3Item3: "Continuous monitoring frameworks",
    AISPday3Item4: "Certification assessment",
    AISPincludesTitle: "All courses include:",
    AISPinclude1: "Enterprise-grade training materials",
    AISPinclude2: "Digital certification",
    AISPinclude3: "Access to expert instructors",
    AISPinclude4: "Post-training support",
    AISPpersonalization: "Customization available for enterprise needs",

    // CAISE
    CAISEmodalTitle: "AI Security Expert (CAISE)",
    CAISEformatLabel: "Format:",
    CAISEformatValue: "4-day advanced workshop (9:00-13:00 each day)",
    CAISEday1Title: "Day 1: Advanced Security Architecture",
    CAISEday1Item1: "Security-by-design for AI systems",
    CAISEday1Item2: "Threat modeling methodologies",
    CAISEday1Item3: "Zero-trust architecture implementation",
    CAISEday1Item4: "Lab: Architecture assessment",
    CAISEday2Title: "Day 2: Advanced Threat Detection",
    CAISEday2Item1: "ML-based anomaly detection",
    CAISEday2Item2: "Neural network integrity verification",
    CAISEday2Item3: "Behavioral analysis techniques",
    CAISEday2Item4: "Lab: Detection system configuration",
    CAISEday3Title: "Day 3: Forensics & Testing",
    CAISEday3Item1: "Model forensic analysis",
    CAISEday3Item2: "Training data compromise investigation",
    CAISEday3Item3: "Red team testing methodologies",
    CAISEday3Item4: "Lab: Forensic investigation",
    CAISEday4Title: "Day 4: Secure DevOps & Certification",
    CAISEday4Item1: "CI/CD pipeline security for AI",
    CAISEday4Item2: "Automated security testing",
    CAISEday4Item3: "Secret management best practices",
    CAISEday4Item4: "Certification assessment",
    CAISEincludesTitle: "All courses include:",
    CAISEinclude1: "Enterprise-grade training materials",
    CAISEinclude2: "Digital certification",
    CAISEinclude3: "Access to expert instructors",
    CAISEinclude4: "Post-training support",
    CAISEpersonalization: "Customization available for enterprise needs",

    // AIGP
    AIGPmodalTitle: "AI Governance Professional (AIGP)",
    AIGPformatLabel: "Format:",
    AIGPformatValue: "3-day executive workshop (9:00-13:00 each day)",
    AIGPday1Title: "Day 1: Governance Foundations",
    AIGPday1Item1: "Key governance principles",
    AIGPday1Item2: "International standards (ISO, NIST, OECD)",
    AIGPday1Item3: "Regulatory compliance requirements",
    AIGPday1Item4: "Workshop: Governance framework planning",
    AIGPday2Title: "Day 2: Risk & Ethics",
    AIGPday2Item1: "AI-specific risk assessment",
    AIGPday2Item2: "Bias detection and mitigation",
    AIGPday2Item3: "Ethics implementation strategies",
    AIGPday2Item4: "Workshop: Risk register development",
    AIGPday3Title: "Day 3: Implementation & Assurance",
    AIGPday3Item1: "Governance framework deployment",
    AIGPday3Item2: "Documentation requirements",
    AIGPday3Item3: "Continuous compliance monitoring",
    AIGPday3Item4: "Certification assessment",
    AIGPincludesTitle: "All courses include:",
    AIGPinclude1: "Enterprise-grade training materials",
    AIGPinclude2: "Digital certification",
    AIGPinclude3: "Access to expert instructors",
    AIGPinclude4: "Post-training support",
    AIGPpersonalization: "Customization available for enterprise needs",

    whatsapp: "Talk with us"

  },
  es: {


    about_us:               "Sobre Nosotros",
    products:               "Productos",
    services:               "Servicios",
    career:                 "Carreras",
    contact_us:             "Contáctanos",

    company_history:        "Historia de la Empresa",
    leadership_team:        "Equipo Directivo",
    youtube_channel:        "Canal de YouTube",
    blog_social:            "Blog y Redes Sociales",

    safety_shield:          "Safety Shield Ultra™",
    ai_model_suite:         "Suite de Protección de Modelos IA",
    enterprise_security:    "Seguridad IA Empresarial",
    performance_optimization: "Optimización de Rendimiento IA",

    ai_assessment:          "Evaluación & Estrategia de Seguridad IA",
    implementation:         "Implementación & Arquitectura",
    training_education:     "Capacitación & Educación",

    get_started:            "Comenzar",
    secure_your_ai:         "Asegura tu IA",
    see_it_in_action:       "Ver en Acción",
    book_a_call:            "Agendar Llamada",
    visit_our_blog:         "Visitar Nuestro Blog",
    see_all_videos:         "Ver Todos los Videos",
    have_question:          "¿Tienes una Pregunta? Escríbenos",
    getCertifiedNow: "Certificate Ahora",

    hero_title:             "Aseguramos tu IA",
    hero_subtitle:          "Protege Tu IA\nDe Amenazas Modernas",
    hero_tagline:           "Descubre Safety Shield Ultra™",
    hero_description:       "Defiende tu IA conversacional contra inyección de prompts y fugas de datos.\nMira cómo Safety Shield Ultra™ mantiene tus interacciones seguras en tiempo real.",

    products_section_title: "Productos",
    products_section_sub:   "Descubre herramientas IA de nivel empresarial creadas para seguridad, escalabilidad y rendimiento.",
    learn_more:             "Más información",
    product1_title:         "Safety Shield Ultra™",
    product1_desc:          "Defensa en tiempo real contra inyección de prompts, fugas y secuestro del modelo.",
    product2_title:         "Suite de Protección de Modelos IA",
    product2_desc:          "Evita la ingeniería inversa y el uso indebido de tus modelos de IA.",
    product3_title:         "Seguridad IA Empresarial",
    product3_desc:          "Protección integral con cifrado, control de acceso y auditorías.",
    product4_title:         "Optimización de Rendimiento IA",
    product4_desc:          "Mejora latencia, precisión y costes con herramientas de optimización.",

    title_courses: "Cursos de Seguridad en IA – Gobierno, Bancos y Empresas | Ultra Deep Tech",
    services_section_title: "Servicios",
    services_section_sub:   "Protege y optimiza tu infraestructura IA con nuestros servicios de evaluación, implementación y capacitación.",
    ai_assessment_desc:     "Evaluaciones de seguridad y planificación estratégica para sistemas de IA. Nuestro equipo realiza auditorías y desarrolla estrategias de protección.",
    implementation_desc:    "Diseño e implementación de arquitecturas de IA seguras. Aseguramos que tu infraestructura esté construida y mantenida de forma segura.",
    training_education_desc:"Programas de capacitación para desarrollar la experiencia en seguridad de IA de tu equipo, desde conceptos básicos hasta prácticas avanzadas.",

    cta_upgrade_title:      "¿Listo para Transformar tus Capacidades de IA?",
    cta_upgrade_sub:        "No pierdas las oportunidades de Seguridad IA.",
    cta_upgrade_btn:        "Contáctanos",

    blog_videos_title:      "¿Quieres profundizar en insights de IA y tecnología?",
    blog_videos_sub:        "Explora nuestro blog para artículos, análisis y lo último en innovación IA.",

    useful_links:           "Enlaces Útiles",
    footer_products:        "Productos",
    footer_services:        "Servicios",
    footer_contact:        "Contáctanos",
    footer_about_text:      "Asegurando IA empresarial con resultados medibles. Agenda una demo para ver tu exposición al riesgo.",
    footer_address:         "Corrientes 800, Ciudad Autónoma de Buenos Aires, CP1008, Argentina",
    footer_phone:           "Teléfono",
    footer_email:           "Correo",
    social_instagram:       "Instagram",
    social_linkedin:        "LinkedIn",
    social_youtube:         "YouTube",
    social_tiktok:          "TikTok",
    copyright:              "Todos los Derechos Reservados",
    designed_by:            "Diseñado por",

    cookie_text:            "Este sitio utiliza cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra Política de Cookies. Puedes ajustar la configuración de tu navegador para gestionar o desactivar cookies.",
    accept:                 "Aceptar",
    deny:                   "Denegar",
    
    whatsapp: "Charla con Nosotros",
    btn_details:"Ver Más Detalles",
    // About page
    about_page_title:       "Sobre Nosotros",
    home:                   "Inicio",
    about_page_current:     "Sobre Nosotros",
    company_history_title:  "Historia de la Empresa",
    company_history_p1:     "Ultra Deep Tech fue fundada en 2023 por profesionales de seguridad y especialistas en IA con más de 15 años de experiencia combinada en IA empresarial. Nuestros fundadores presenciaron las brechas de seguridad al adoptar IA sin protección adecuada. Basándonos en trayectorias asegurando sistemas críticos en Fortune 500 y abordando vulnerabilidades en implementaciones tempranas de aprendizaje automático, establecimos Ultra Deep Tech para proteger la IA en entornos empresariales.",
    company_history_p2:     "Nuestro equipo directivo ha enfrentado desafíos de seguridad de IA desde el auge del deep learning, lo que nos brinda perspectiva sobre amenazas actuales y emergentes. Aprovechamos este conocimiento técnico para abordar todo el espectro de vulnerabilidades de IA—desde el envenenamiento de modelos hasta la inyección de prompts y la exfiltración de datos—con la urgencia que requieren las empresas modernas.",
    brands_title:           "Marcas que confían en nosotros",
    leadership_team_title:  "Equipo Directivo",
    avi_pilcer_name:        "Avi Pilcer",
    avi_pilcer_role:        "CEO y Científico Jefe",
    avi_pilcer_bio:         "Experto en IA, ex-asesor tecnológico para inteligencia israelí. 15+ años pionero en IA y ciberseguridad. Ex-Director de IA en Motorola Solutions. Emprendedor serial.",
    guido_galicer_name:     "Guido Galicer",
    guido_galicer_role:     "Product / Strategy",
    guido_galicer_bio:      "Fundador de Habla Agency. Historial probado de marketing de empresas hasta valoraciones multimillonarias. Estratega con fuerte formación y perspectiva global.",
    karla_lemoine_name:     "Karla Lemoine",
    karla_lemoine_role:     "Líder Legal y de Operaciones",
    karla_lemoine_bio:      "Experta en Derecho y RR. HH. Garantiza cumplimiento normativo y eficiencia operativa. Gran comunicadora.",
    sasha_daich_name:       "Sasha Daich",
    sasha_daich_role:       "VP Desarrollo de Negocios",
    sasha_daich_bio:        "Generó 7.18× ingresos en 2.5 años en Forter, ahora con valoración de $3.3 B. Experta en crecimiento estratégico y expansión de mercado.",
    maximilian_acri_name:   "Maximiliano Acri",
    maximilian_acri_role:   "Líder Técnico",
    maximilian_acri_bio:    "Experto en tecnología. Desarrolló numerosas aplicaciones y plataformas que atienden a millones diariamente. Lidera con maestría técnica.",
    luciano_camano_name:    "Luciano Camano",
    luciano_camano_role:    "Gerente de Alianzas Estratégicas",
    luciano_camano_bio:     "Aporta amplia experiencia en soluciones de seguridad de IA empresarial, forjando relaciones de alto impacto con líderes de industria en entornos altamente regulados.",

//cta
certifications_cta_title:       "Certificaciones",
certifications_cta_desc:        "Valide sus habilidades con nuestros certificados reconocidos.",
certifications_cta_button:      "Certifícate ahora",

    // Dynamic “Product Details” content
    product_details_title:  "Detalles del Producto",
    product_list_title:     "Lista de Productos",
    product1_link:          "Safety Shield Ultra™",
    product2_link:          "Model Protection Suite",
    product3_link:          "Enterprise Security",
    product4_link:          "Performance Optimization",
    help_box_title:         "¿Tienes una Pregunta?",
    help_box_phone:         "+54 9 11 5992 9083",
    help_box_email:         "contact@ultradeeptech.com",

    product1_content_title:  "Safety Shield Ultra™",
    product1_content_desc:   "Safety Shield Ultra™ es una plataforma de seguridad en tiempo real e inteligente diseñada específicamente para proteger asistentes virtuales y chatbots de IA contra ataques adversariales e inputs maliciosos. Monitorea continuamente las interacciones de IA y bloquea al instante comportamientos sospechosos, garantizando privacidad y cumplimiento en cada paso.",
    product1_feat1:          "Filtrado de prompts maliciosos en tiempo real",
    product1_feat2:          "Prevención de jailbreaks e inyecciones",
    product1_feat3:          "Monitoreo continuo de anomalías",
    product1_feat4:          "Controles de seguridad personalizables",
    product1_feat5:          "Cumplimiento automático con GDPR, ISO",

    product2_content_title:  "Model Protection Suite",
    product2_content_desc:   "Diseñado para equipos técnicos que buscan salvaguardar la lógica interna de sus modelos mientras preservan la explicabilidad y confidencialidad de datos. La suite aprovecha anonimización avanzada, defensa adversarial y marcos de interpretabilidad para maximizar confianza y rendimiento.",
    product2_feat1:          "Explicabilidad mediante herramientas XAI avanzadas",
    product2_feat2:          "Canalizaciones robustas de anonimización de datos",
    product2_feat3:          "Prevención de ataques adversariales",
    product2_feat4:          "Benchmarking completo de seguridad Ia",

    product3_content_title:  "Enterprise Security",
    product3_content_desc:   "Adaptado para despliegues a gran escala en industrias reguladas, esta solución ayuda a organizaciones a hacer cumplir políticas de seguridad, realizar evaluaciones de riesgo y responder rápidamente a amenazas usando insights impulsados por IA. Ideal para instituciones financieras, gobierno e infraestructura crítica.",
    product3_feat1:          "Evaluaciones de riesgo específicas de IA",
    product3_feat2:          "Integración con frameworks GRC",
    product3_feat3:          "Monitoreo de seguridad en tiempo real",
    product3_feat4:          "Respuesta automática a incidentes con IA generativa",

    product4_content_title:  "Performance Optimization",
    product4_content_desc:   "Ofrece ganancias de rendimiento medibles en velocidad de procesamiento de IA, eficiencia de costos y escalabilidad en la nube. Ideal para sistemas de producción que necesitan escalar inteligentemente mientras mantienen seguridad de primer nivel.",
    product4_feat1:          "Compresión de modelos lista para producción",
    product4_feat2:          "Benchmarking en vivo de rendimiento y latencia",
    product4_feat3:          "Optimización de recursos en la nube",
    product4_feat4:          "Estrategias inteligentes de reducción de costos",

// Productos dinámicos
product1_content_title:  "Safety Shield Ultra™",
product1_highlight:      "Defensa de próxima generación para sistemas de IA conversacional.",
product1_content_desc:   "Safety Shield Ultra™ es una plataforma de seguridad en tiempo real específicamente diseñada para proteger asistentes virtuales y chatbots de IA contra ataques adversariales y entradas maliciosas. Monitorea continuamente las interacciones e bloquea instantáneamente comportamientos sospechosos, garantizando privacidad y cumplimiento en cada paso.",
product1_feat1:          "Filtrado en tiempo real de prompts maliciosos",
product1_feat2:          "Prevención de jailbreaks e inyección de código",
product1_feat3:          "Monitoreo continuo de anomalías",
product1_feat4:          "Controles de seguridad personalizables",
product1_feat5:          "Cumplimiento automático con GDPR e ISO",

product2_content_title:  "Suite de Protección de Modelos IA",
product2_highlight:      "Protege tus modelos de IA sin sacrificar la transparencia.",
product2_content_desc:   "Diseñada para equipos técnicos que buscan salvaguardar la lógica interna de sus modelos manteniendo la explicabilidad y la confidencialidad de los datos. La suite aprovecha marcos de anonimización de vanguardia, defensa adversarial e interpretabilidad para maximizar la confianza y el rendimiento.",
product2_feat1:          "Explicabilidad mediante avanzadas herramientas XAI",
product2_feat2:          "Canales robustos de anonimización de datos",
product2_feat3:          "Prevención de ataques adversariales",
product2_feat4:          "Benchmarking de seguridad completo",

product3_content_title:  "Seguridad IA Empresarial",
product3_highlight:      "Protección empresarial de nivel corporativo para entornos de IA críticos.",
product3_content_desc:   "Orientado a despliegues a gran escala en industrias reguladas, esta solución ayuda a las organizaciones a hacer cumplir políticas de seguridad, realizar evaluaciones de riesgo y responder rápidamente a amenazas con información impulsada por IA. Ideal para instituciones financieras, organismos gubernamentales e infraestructura crítica.",
product3_feat1:          "Evaluaciones de riesgo específicas para IA",
product3_feat2:          "Integración con marcos GRC",
product3_feat3:          "Monitoreo de seguridad en tiempo real",
product3_feat4:          "Respuesta automática a incidentes con IA generativa",

product4_content_title:  "Optimización de Rendimiento IA",
product4_highlight:      "Acelera la velocidad y reduce costos, sin comprometer la seguridad.",
product4_content_desc:   "Entregable de mejoras medibles en velocidad de procesamiento de IA, eficiencia de costes y escalabilidad en la nube. Perfecto para sistemas de producción que necesitan escalar de forma inteligente manteniendo la máxima seguridad.",
product4_feat1:          "Compresión de modelos lista para producción",
product4_feat2:          "Benchmarking en vivo de rendimiento y latencia",
product4_feat3:          "Optimización de recursos en la nube",
product4_feat4:          "Estrategias inteligentes de ahorro de costes",
product1_default_core_label: "Soluciones Principales:",

product1_highlight: "Defensa de próxima generación para sistemas de IA conversacional.",
product2_highlight: "Protege tus modelos de IA sin sacrificar la transparencia.",
product3_highlight: "Protección empresarial de nivel corporativo para entornos de IA críticos.",
product4_highlight: "Acelera la velocidad y reduce costos, sin comprometer la seguridad.",
product1_default_benefits_label: "Beneficios:",
product1_default_benefit1:       "Seguridad de IA",
product1_default_benefit2:       "Cumplimiento",
product1_default_benefit3:       "Optimización",
product1_default_benefit4:       "Reducción de Riesgos",

// Placeholder si aún no se seleccionó producto
product_details_placeholder: "Selecciona un producto para ver los detalles aquí.",


    // Industries Section
    industries_title:        "Industrias en Riesgo",
    industries_subtitle:     "Estadísticas Críticas Across Sectores Clave",
    industry1_title:         "Servicios Financieros",
    industry1_stats:         "• 78% de las firmas financieras enfrentan brechas de seguridad IA\n• $2.5 M costo promedio por brecha\n• 45% de sistemas IA vulnerables a ataques\n• 60% de violaciones de cumplimiento en IA",
    industry2_title:         "Salud",
    industry2_stats:         "• 85% de sistemas IA en salud expuestos\n• $1.2 M costo promedio de brecha\n• 70% de datos de pacientes en riesgo\n• 50% de violaciones HIPAA en IA",
    industry3_title:         "Comercio Electrónico",
    industry3_stats:         "• 92% de sistemas IA en e-commerce atacados\n• $3.8 M pérdida promedio por fraude\n• 65% de datos de clientes expuestos\n• 55% de pérdidas de ingresos por brechas",
visit_our_blog:           "Visitar Nuestro Blog",
see_all_videos:           "Ver Todos los Videos",
terms_of_service:         "Términos del Servicio",
privacy_policy:           "Política de Privacidad",

services_details_title:   "Detalles de Servicios",
services_details_current: "Detalles de Servicios",
services_list_title:      "Lista de Servicios",
help_title:               "¿Tienes una Pregunta?",
help_box_phone:           "+54 9 11 5992 9083",
help_box_email:           "contact@ultradeeptech.com",
services_default_title:   "Servicios de Seguridad IA para Gobiernos y Empresas",
core_services_label:      "Servicios Clave:",
coverage_label:           "Cobertura:",
coverage1:                "Evaluación de Seguridad",
coverage2:                "Diseño de Arquitectura",
coverage3:                "Gestión de Cumplimiento",
coverage4:                "Monitoreo y Soporte",
coverage5:                "Respuesta a Incidentes",

service1_feat1:           "Evaluación de Vulnerabilidades",
service1_feat2:           "Análisis de Seguridad",
service1_feat3:           "Gestión de Cumplimiento",
service1_feat4:           "Consultoría Ejecutiva",

service2_feat1:           "Arquitectura de Seguridad",
service2_feat2:           "Despliegue de Controles",
service2_feat3:           "Planificación de Integración",
service2_feat4:           "Gestión de Accesos",
service2_feat5:           "Monitoreo de Seguridad",
service2_feat6:           "Respuesta a Incidentes",
service2_feat7:           "Análisis de Rendimiento",

service3_feat1:           "Capacitación Personalizada",
service3_feat2:           "Talleres Prácticos",
service3_feat3:           "Buenas Prácticas de Seguridad",
service3_feat4:           "Certificación de Equipo",
// ——— Dentro de translations.es —————————————————————
contact_page_title:        "Contacto",
breadcrumbs_home:          "Inicio",
breadcrumbs_current:       "Contacto",

faq_section_title:         "Preguntas Frecuentes",
faq_q1:                    "¿Cuál es el enfoque principal de Ultra Deep Tech?",
faq_a1:                    "Ultra Deep Tech ofrece soluciones y servicios de seguridad para IA. Nuestra plataforma, Safety Shield Ultra™, brinda protección en tiempo real para conversaciones, modelos e infraestructura de IA, garantizando que tus sistemas se mantengan seguros y cumplan con normativas. También ofrecemos consultoría e implementación de IA para ayudar a las empresas a desplegar soluciones de IA seguras en todos los entornos.",
current_job_openings:"Vacantes Abiertas",
core_values:"Valores Fundamentales",
faqs:"Preguntas Frecuentes",
office_locations:"Ubicación de la Oficina",
chat_with_us:"Chatea con Nosotros",
faq_q2:                    "¿Qué servicios de seguridad específicos ofrecen?",
faq_a2_intro:              "Nuestros servicios de seguridad cubren todo el ciclo de vida de protección de IA:",
faq_a2_li1:                "Monitoreo y protección de seguridad de IA",
faq_a2_li2:                "Evaluación de seguridad de modelos",
faq_a2_li3:                "Gobernanza y cumplimiento de IA",
faq_a2_li4:                "Protección de datos",
faq_a2_li5:                "Seguridad de infraestructura",
faq_a2_li6:                "Capacitación en seguridad",
faq_a2_li7:                "Consultoría e implementación de IA",

faq_q3:                    "¿Cómo difiere su enfoque de seguridad del de los proveedores tradicionales?",
faq_a3_intro:              "Nuestro enfoque está diseñado específicamente para sistemas de IA:",
faq_a3_li1:                "Arquitectura de seguridad centrada en IA",
faq_a3_li2:                "Monitoreo de IA en tiempo real",
faq_a3_li3:                "Protección de amenazas específicas de IA",
faq_a3_li4:                "Controles de seguridad automatizados",
faq_a3_li5:                "Adaptación continua a amenazas de IA",
faq_a3_li6:                "Cobertura de cumplimiento de IA",

faq_q4:                    "¿Qué estándares de seguridad y cumplimiento soportan?",
faq_a4_intro:              "Nuestras soluciones se alinean con los siguientes estándares:",
faq_a4_li1:                "ISO 27001 para seguridad de la información",
faq_a4_li2:                "GDPR y regulaciones de privacidad de datos",
faq_a4_li3:                "Marco de Gestión de Riesgos de IA de NIST",
faq_a4_li4:                "Requisitos de cumplimiento específicos por industria",
faq_a4_li5:                "Directrices de seguridad específicas de IA",
faq_a4_li6:                "Estándares de seguridad en la nube",
faq_a4_tail:               "Nos aseguramos de que tus sistemas de IA cumplan con todos los requisitos de seguridad y normativos.",

faq_q5:                    "¿Cómo maneja Safety Shield Ultra™ los incidentes?",
faq_a5_intro:              "Safety Shield Ultra™ ofrece respuesta automatizada a incidentes:",
faq_a5_ol1:                "Monitoreo continuo de IA",
faq_a5_ol2:                "Alertas automatizadas",
faq_a5_ol3:                "Análisis en tiempo real",
faq_a5_ol4:                "Contención automatizada",
faq_a5_ol5:                "Registro de incidentes",
faq_a5_ol6:                "Actualizaciones de seguridad",

faq_q6:                    "¿Qué hace que sus soluciones sean escalables?",
faq_a6_intro:              "Nuestra arquitectura soporta despliegues empresariales:",
faq_a6_li1:                "Controles nativos en la nube",
faq_a6_li2:                "Escalado automatizado",
faq_a6_li3:                "Gestión centralizada",
faq_a6_li4:                "Soporte multientorno",
faq_a6_li5:                "Integración por API",
faq_a6_li6:                "Despliegue flexible",
faq_a6_tail:               "Nos aseguramos de que tu seguridad crezca junto con tu infraestructura de IA.",

faq_q7:                    "¿Cómo mantienen la seguridad?",
faq_a7_intro:              "Mantenemos la seguridad mediante:",
faq_a7_li1:                "Evaluaciones regulares",
faq_a7_li2:                "Actualizaciones de amenazas",
faq_a7_li3:                "Gestión de parches",
faq_a7_li4:                "Optimización de rendimiento",
faq_a7_li5:                "Actualizaciones de capacitación en seguridad",
faq_a7_li6:                "Monitoreo de cumplimiento",
faq_a7_tail:               "Nuestra seguridad evoluciona con las nuevas amenazas y tecnologías de IA.",

contact_address_title:     "Dirección",
contact_address_text:      "Corrientes 800, Ciudad Autónoma de Buenos Aires",
contact_call_title:        "Llámanos o Escríbenos",
contact_call_number:       "+54 (9) 11 7645-5965",
contact_email_title:       "Envíanos un Correo",
contact_email:             "contact@ultradeeptech.com",

form_name_placeholder:     "Tu Nombre",
form_email_placeholder:    "Tu Correo",
form_subject_placeholder:  "Asunto",
form_message_placeholder:  "Mensaje",
form_send_button:          "Enviar Mensaje",
form_loading:              "Cargando...",
form_error_message:        "Hubo un error al enviar tu mensaje.",
form_sent_message:         "Tu mensaje ha sido enviado. ¡Gracias!",
career_page_title:       "Carreras",
  breadcrumbs_home:        "Inicio",
  breadcrumbs_current:     "Carreras",

  career_openings_title:   "Ofertas de Empleo Actuales",
  career_openings:    "Ver todas nuestras ofertas en LinkedIn",
  career_openings_desc:    "Descubre las mejores oportunidades de trabajo en nuestro LinkedIn. Síguenos para actualizaciones diarias y ofertas exclusivas.",
  career_openings_link:    "Ver en LinkedIn",

  // Core Recruiting Values
  values_title:            "Valores Fundamentales de Reclutamiento",
  values_subtitle:         "Principios guía que impulsan nuestras decisiones de reclutamiento.",

  // Cada valor
  value_excellence_title:  "Excelencia",
  value_excellence_desc:   "Busca los estándares más altos en todas las tareas.",
  value_passion_title:     "Pasión",
  value_passion_desc:      "Trabaja con entusiasmo y dedicación.",
  value_cutting_edge_title:"Vanguardia e Innovación",
  value_cutting_edge_desc: "Adopta enfoques innovadores y de vanguardia.",
  value_hard_working_title:"Dedicación",
  value_hard_working_desc: "Esfuérzate para lograr resultados excepcionales.",
  value_result_oriented_title: "Orientación a Resultados",
  value_result_oriented_desc:  "Enfócate en lograr resultados medibles.",
  value_overcoming_title:  "Superar Expectativas",
  value_overcoming_desc:   "Ve más allá de los resultados anticipados.",
  value_world_change_title:"Cambiar el Mundo",
  value_world_change_desc: "Contribuye a proyectos significativos e impactantes.",
  value_ownership_title:   "Autonomía y Responsabilidad",
  value_ownership_desc:    "Toma la iniciativa y responsabilidad de tu trabajo.",
  value_integrity_title:   "Comunicación Transparente e Integridad",
  value_integrity_desc:    "Comunica abiertamente y actúa con honestidad.",
  value_organization_title:"Buena Organización",
  value_organization_desc: "Mantén un entorno de trabajo estructurado y eficiente.",
  value_can_do_title:      "Actitud Positiva",
  value_can_do_desc:       "Enfrenta los desafíos con optimismo y determinación.",
  blog_social_page_title:  "Blog y Redes Sociales",
blog_social_page_current:"Blog y Redes Sociales",
cta_linkedin:            "Mira Nuestras Publicaciones Recientes",
cta_instagram:           "Mira Nuestro Instagram",
  politics_page_title:       "Política",
  politics_page_current:     "Política",

  terms_title:               "Términos de Servicio",
  terms_content: `1. Aceptación de los Términos  
Al acceder y usar el sitio web https://ultradeep-tech.github.io/website/ (el “Sitio”), usted acepta cumplir y quedar sujeto a estos Términos de Servicio y a todas las leyes y normativas aplicables. Si no está de acuerdo con alguno de estos términos, no utilice el Sitio.

2. Uso del Sitio  
2.1. Licencia de Uso: Se le concede permiso para descargar temporalmente una copia de los materiales (información o software) del Sitio para visualización transitoria personal y no comercial. Esto constituye una concesión de licencia, no una transferencia de título. Bajo esta licencia, usted no podrá:  
• Modificar o copiar los materiales.  
• Utilizar los materiales con fines comerciales o para exhibición pública (comercial o no comercial).  
• Intentar descompilar o realizar ingeniería inversa de cualquier software contenido en el Sitio.  
• Eliminar cualquier aviso de derechos de autor u otras notaciones de propiedad de los materiales.  
• Transferir los materiales a otra persona o “reflejar” los materiales en cualquier otro servidor.  

2.2. Terminación: Esta licencia finalizará automáticamente si usted viola alguna de estas restricciones y podrá ser rescindida por UltraDeep Tech en cualquier momento. Al terminar su visualización de estos materiales o al rescindirse esta licencia, usted deberá destruir cualquier material descargado en su posesión, ya sea en formato electrónico o impreso.

3. Renuncia de Garantías  
Los materiales del Sitio se proporcionan “tal cual”. UltraDeep Tech no ofrece garantías, expresas o implícitas, y renuncia a todas las demás garantías, incluyendo las implícitas de comerciabilidad, idoneidad para un fin particular o no infracción de derechos. Además, UltraDeep Tech no garantiza la precisión, resultados probables o fiabilidad del uso de los materiales en su Sitio o en sitios vinculados.

4. Limitaciones de Responsabilidad  
En ningún caso UltraDeep Tech ni sus proveedores serán responsables por daños (p. ej., pérdida de datos o beneficios, o interrupción de negocio) que surjan del uso o imposibilidad de usar los materiales del Sitio, incluso si UltraDeep Tech o un representante autorizado ha sido notificado de la posibilidad de tales daños. Algunas jurisdicciones no permiten limitaciones a garantías implícitas o responsabilidad por daños incidentales, por lo que estas limitaciones pueden no aplicarse a usted.

5. Exactitud de los Materiales  
Los materiales del Sitio pueden contener errores técnicos, tipográficos o fotográficos. UltraDeep Tech no garantiza que los materiales sean precisos, completos o actuales. Puede modificar los materiales en cualquier momento sin previo aviso, pero no se compromete a actualizarlos.

6. Enlaces  
UltraDeep Tech no ha revisado todos los sitios vinculados y no se responsabiliza de su contenido. La inclusión de cualquier enlace no implica respaldo. El uso de cualquier sitio vinculado es bajo su propio riesgo.

7. Modificaciones  
Puede revisar estos Términos de Servicio en cualquier momento sin previo aviso. Al usar el Sitio, usted acepta quedar sujeto a la versión vigente de los Términos.

8. Ley Aplicable  
Estos términos se rigen por las leyes de [Su País] y usted se somete a la jurisdicción exclusiva de sus tribunales.

9. Privacidad  
El uso del Sitio también está sujeto a nuestra Política de Privacidad, incorporada aquí por referencia.

10. Contacto  
Si tiene preguntas sobre estos Términos, contáctenos en contact@ultradeep.tech.`,

  privacy_title:             "Política de Privacidad",
  privacy_content: `1. Introducción  
UltraDeep Tech ("nosotros", "nuestro") se compromete a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando visita https://ultradeep-tech.github.io/website/ (el “Sitio”). Si no está de acuerdo con esta política, no acceda al Sitio.

2. Principios de Tratamiento de Datos  
2.1. Licitud, Equidad y Transparencia: Siempre requeriremos su consentimiento, informándole con total transparencia.  
2.2. Minimización: Solo solicitaremos los datos estrictamente necesarios.  
2.3. Limitación de Conservación: Conservaremos los datos el tiempo imprescindible y eliminaremos registros inactivos.  
2.4. Integridad y Confidencialidad: Adoptamos medidas razonables para proteger sus datos de accesos o usos no autorizados.

3. Obtención de Datos Personales  
No es necesario proporcionar datos para navegar. Los casos en que sí los solicita son:  
• Al contactarnos por formulario o correo.

4. Finalidad del Tratamiento  
Al enviarnos un correo o suscribirse al boletín, usted nos proporciona datos (IP, nombre, dirección, email, teléfono). Con ello acepta su recogida, uso y almacenamiento según esta política.

4.1. Formulario de Contacto: Recopilamos nombre, email, teléfono y web para atender su consulta.  
4.2. Suscripción: Recopilamos nombre, email, teléfono y web para gestionar suscripciones y enviar boletines, promociones u ofertas especiales.

5. Derechos de los Usuarios  
Tiene derecho a:  
• Acceder a sus datos.  
• Rectificarlos o cancelarlos.  
• Limitar su tratamiento.  
• Oponerse al mismo.  
• Portabilidad.  
Para ejercerlos, envíe un email a ultradeep-tech@gmail.com con prueba de identidad.

6. Uso de sus Datos  
Usamos la información para:  
• Operar y mantener el Sitio.  
• Mejorar la experiencia.  
• Responder comentarios y preguntas.  
• Enviar promociones.  
• Prevenir fraudes y garantizar la seguridad.

7. Seguridad  
Seguimos prácticas de la industria para evitar pérdida, uso indebido o acceso no autorizado de sus datos.

8. Contenido de Otros Sitios  
El Sitio puede incluir contenido incrustado (videos, imágenes, artículos). Ese contenido se comporta como si usted visitara el sitio de origen y puede recopilar datos, usar cookies o rastreadores.

9. Cookies  
Usamos cookies para el correcto funcionamiento del Sitio. Consulte nuestra Política de Cookies para más detalles.

10. Cambios  
Podemos modificar esta política en cualquier momento. Los cambios entrarán en vigor al publicarse. Revísela periódicamente.

Para dudas o ejercer derechos, envíe un email con prueba de identidad.`,

  cookie_policy_title:       "Política de Cookies de Ultra Deep Tech",
  cookie_policy_content:     `1. Introducción  
Bienvenido a UltraDeep Tech. Esta Política de Cookies explica cómo usamos cookies y tecnologías similares en www.ultradeeptech.com (el “Sitio”). Al visitarlo, acepta el uso de cookies tal como se describe aquí, salvo que las desactive.

2. ¿Qué son las Cookies?  
Son pequeños archivos de texto que se almacenan en su dispositivo al visitar sitios web, permitiendo reconocer su visita y recopilar datos de interacción.

3. Tipos de Cookies que Usamos  
• Cookies esenciales: necesarias para funciones básicas (navegación, acceso seguro).  
• Cookies de rendimiento: recogen datos de uso (páginas visitadas, errores) para mejorar el Sitio.  
• Cookies de funcionalidad: recuerdan elecciones (usuario, idioma, región) y ofrecen funciones personalizadas.  

4. Control de Cookies  
Puede gestionar o desactivar cookies desde la configuración de su navegador (consulte su menú de ayuda). Tenga en cuenta que algunas funciones del Sitio pueden dejar de estar disponibles.

5. Cambios en la Política  
Nos reservamos el derecho a modificar esta Política de Cookies en cualquier momento. Los cambios serán efectivos al publicarse. Recomendamos revisarla periódicamente.

6. Contacto  
Si tiene preguntas sobre nuestra Política de Cookies, escríbanos a contact@ultradeeptech.com.`,

 // Hero Section
 hero_main_title:        "Safety Shield Ultra™: Asegurando tu IA Conversacional",
 hero_description:       "Protege tus conversaciones de IA con monitoreo de seguridad integral. Safety Shield Ultra™ protege contra inyección de prompts, fugas de datos y acceso no autorizado en tiempo real.",
 see_more_features:      "Ver más características",
 see_it_in_action:       "Verlo en acción",
 request_demo:           "Solicitar demo",

 // About Section
 about_discover_title:   "Descubre Safety Shield Ultra™",
 about_complete_protection_title: "Protección completa para sistemas de IA conversacional",
 about_description:      "Safety Shield Ultra™ ofrece seguridad integral para tus chatbots y asistentes virtuales de IA. Supervisa interacciones, evita accesos no autorizados y garantiza la privacidad de datos en tiempo real.",
 see_more:               "Ver más",

 // Featured Section
 featured_title:         "Asegura tus conversaciones de IA",
 featured_subtitle:      "Protección integral para todas tus aplicaciones de IA conversacional.",
 featured_card1_title:   "Protección en tiempo real",
 featured_card1_desc:    "Supervisa y asegura conversaciones de IA al instante, bloqueando amenazas antes de que afecten tu sistema.",
 featured_card2_title:   "Cumplimiento de privacidad",
 featured_card2_desc:    "Garantiza que las interacciones de IA cumplan con regulaciones de protección de datos y estándares de privacidad.",
 featured_card3_title:   "Prevención de riesgos",
 featured_card3_desc:    "Identifica y bloquea riesgos de seguridad potenciales en conversaciones de IA antes de que escalen.",

 // Features Section
 features_section_title:    "Capacidades clave",
 features_section_subtitle: "Funciones de seguridad diseñadas específicamente para sistemas de IA conversacional.",

 conv_security_title:       "Seguridad de Conversaciones",
 conv_security_subtitle:    "Protege todas las interacciones de IA con monitoreo avanzado.",
 conv_security_feat1:       "Detección y prevención de inyección de prompts en tiempo real.",
 conv_security_feat2:       "Bloqueo automático de intentos de acceso no autorizados.",
 conv_security_feat3:       "Supervisión continua de las respuestas de IA para seguridad.",

 feature_privacy_protection_title:   "Protección de Privacidad",
 feature_privacy_protection_subtitle:"Asegura la privacidad de datos en todas las conversaciones de IA.",
 feature_privacy_protection_desc:    "Protege información sensible con detección automática de PII, enmascarado de datos y monitoreo de cumplimiento de privacidad.",

 feature_security_analytics_title:   "Analítica de Seguridad",
 feature_security_analytics_desc:    "Información completa sobre el estado de seguridad de tu sistema de IA.",
 security_analytics_feat1:           "Métricas detalladas de seguridad y análisis de amenazas.",
 security_analytics_feat2:           "Evaluación de riesgos y análisis de tendencias.",
 security_analytics_feat3:           "Informes de seguridad personalizados y alertas.",

 feature_access_control_title:       "Control de Acceso",
 feature_access_control_subtitle:    "Gestiona y supervisa el acceso a sistemas de IA de forma segura.",
 feature_access_control_desc:        "Controla quién puede acceder a tus sistemas de IA con permisos basados en roles, autenticación y registros detallados.",

 // CTA Features
 cta_features_title:          "Conoce todas las funcionalidades y mira cómo funciona",
 cta_features_subtitle:       "Explora con nosotros todas las características",

 // FAQ Section
 faq_section_title:           "Preguntas Frecuentes",
 faq_section_subtitle:        "Preguntas comunes sobre cómo asegurar tus sistemas de IA conversacional con Safety Shield Ultra™.",

 faq_q1: "¿Qué es Safety Shield Ultra™?",
 faq_a1: "Safety Shield Ultra™ es una plataforma de seguridad diseñada específicamente para proteger sistemas de IA conversacional. Monitorea las interacciones de IA en tiempo real, previene accesos no autorizados y garantiza la privacidad de los datos en todas las conversaciones de IA.",
 faq_q2: "¿Cómo protege Safety Shield Ultra™ mis sistemas de IA?",
 faq_a2: "Nuestra plataforma ofrece protección integral mediante detección de inyección de prompts en tiempo real, enmascarado de datos PII, supervisión de respuestas y control de acceso. Analiza continuamente las conversaciones de IA para evitar brechas de seguridad y garantizar el cumplimiento.",
 faq_q3: "¿Qué tipos de sistemas de IA puede proteger Safety Shield Ultra™?",
 faq_a3: "Safety Shield Ultra™ funciona con todas las plataformas de IA conversacional más importantes, incluidos chatbots de servicio al cliente, asistentes virtuales y sistemas de IA empresariales. Nuestra solución escala desde pequeños chatbots hasta implementaciones de IA a gran escala.",
 faq_q4: "¿Cómo maneja Safety Shield Ultra™ el cumplimiento de privacidad de datos?",
 faq_a4: "Detectamos y enmascaramos automáticamente información sensible en las conversaciones de IA, aseguramos el cumplimiento de GDPR y otras regulaciones de privacidad, y proporcionamos registros detallados de auditoría de todas las prácticas de manejo de datos.",
 faq_q5: "¿Puede Safety Shield Ultra™ integrarse con las plataformas de IA existentes?",
 faq_a5: "Sí, Safety Shield Ultra™ se integra de manera transparente con las principales plataformas de IA y puede implementarse como capa de seguridad sobre tus sistemas de IA conversacional existentes sin interrumpir su funcionamiento.",
 faq_q6: "¿Cómo funciona la protección contra inyección de prompts?",
 faq_a6: "Nuestro sistema analiza cada entrada en tiempo real para detectar y bloquear prompts potencialmente dañinos que podrían manipular el comportamiento de tu IA. Esto incluye intentos de eludir controles de seguridad o extraer información sensible.",
 faq_q7: "¿Qué tipo de soporte ofrecen?",
 faq_a7: "Ofrecemos soporte técnico 24/7, actualizaciones regulares de seguridad y asesoría experta en mejores prácticas de seguridad de IA. Nuestro equipo te ayuda a optimizar la configuración de seguridad de tu IA y a responder ante cualquier incidencia.",
 faq_q8: "¿Cómo supervisa Safety Shield Ultra™ las respuestas de IA?",
 faq_a8: "Nuestra plataforma analiza continuamente las salidas de IA para asegurar que cumplan con los estándares de seguridad y cumplimiento, señalando respuestas potencialmente inapropiadas o inseguras antes de que lleguen a los usuarios.",
 faq_q9: "¿Con qué frecuencia se actualiza el sistema de seguridad?",
 faq_a9: "Actualizamos continuamente nuestras reglas de seguridad y patrones de detección para proteger contra nuevos tipos de ataques y vulnerabilidades de IA, garantizando que tus sistemas estén protegidos ante amenazas emergentes.",
 faq_q10:"¿Puedo probar Safety Shield Ultra™ antes de comprar?",
 faq_a10:"Sí, ofrecemos una demo de Safety Shield Ultra™ protegiendo un sistema de prueba de IA. Contacta con nuestro equipo para agendar una demostración personalizada de nuestras funcionalidades de seguridad.",

 feature_prompt_injection_title: "Prompt Injection Defense",
 feature_prompt_injection_desc:  "Prevents malicious prompts and unauthorized commands in real-time.",
 feature_data_privacy_title:     "Data Privacy Control",
 feature_data_privacy_desc:      "Protects sensitive information and prevents unauthorized data exposure.",
 feature_response_monitoring_title: "Response Monitoring",
 feature_response_monitoring_desc:  "Analyzes AI responses for safety and compliance in real-time.",
 feature_security_analytics_title:   "Security Analytics",
 feature_security_analytics_desc:    "Tracks and visualizes security metrics across all AI conversations.",
about_discover_title:   "Discover Safety Shield Ultra™",
about_complete_protection_title: "Complete Protection for Conversational AI Systems",
about_description:      "Safety Shield Ultra™ provides comprehensive security for your AI chatbots and virtual assistants. Monitor interactions, prevent unauthorized access, and ensure data privacy in real-time.",
see_more:               "See more",
request_demo:           "Request a demo",

feature_prompt_injection_title: "Prompt Injection Defense",
feature_prompt_injection_desc:  "Prevents malicious prompts and unauthorized commands in real-time.",
feature_data_privacy_title:     "Data Privacy Control",
feature_data_privacy_desc:      "Protects sensitive information and prevents unauthorized data exposure.",
feature_response_monitoring_title: "Response Monitoring",
feature_response_monitoring_desc:  "Analyzes AI responses for safety and compliance in real-time.",
feature_security_analytics_title:   "Security Analytics",
feature_security_analytics_desc:    "Tracks and visualizes security metrics across all AI conversations.",

// Y en tu objeto `es`:
about_discover_title:   "Descubre Safety Shield Ultra™",
about_complete_protection_title: "Protección completa para sistemas de IA conversacional",
about_description:      "Safety Shield Ultra™ ofrece seguridad integral para tus chatbots y asistentes virtuales de IA. Supervisa interacciones, evita accesos no autorizados y garantiza la privacidad de datos en tiempo real.",
see_more:               "Ver más",
request_demo:           "Solicitar demo",

feature_prompt_injection_title: "Defensa contra inyección de prompts",
feature_prompt_injection_desc:  "Evita prompts maliciosos y comandos no autorizados en tiempo real.",
feature_data_privacy_title:     "Control de privacidad de datos",
feature_data_privacy_desc:      "Protege información sensible y evita exposiciones no autorizadas.",
feature_response_monitoring_title: "Monitoreo de respuestas",
feature_response_monitoring_desc:  "Analiza las respuestas de IA para seguridad y cumplimiento en tiempo real.",
feature_security_analytics_title:   "Analítica de seguridad",
feature_security_analytics_desc:    "Monitorea y visualiza métricas de seguridad en todas las conversaciones de IA.",
product1_default_title:  "Soluciones de IA para Gobiernos y Empresas",
// … dentro de translations.es
  // Sección “Por Qué Elegirnos”
  why_title:            "¿Por Qué Elegirnos?",
  why_desc:             "Descubre cómo Ultra Deep Tech puede elevar la seguridad de tu equipo y asegurar el éxito de tu organización.",
  why_experts_title:    "Expertos Reconocidos",
  why_experts_desc:     "Contamos con profesionales certificados y con amplia experiencia en IA y ciberseguridad, listos para guiar a tu equipo.",
  why_solutions_title:  "Soluciones a Medida",
  why_solutions_desc:   "Diseñamos planes de formación personalizados según las necesidades y objetivos de tu organización.",
  why_impact_title:     "Impacto Tangible",
  why_impact_desc:      "Nuestros programas mejoran la capacidad de tu equipo para prevenir riesgos y optimizar procesos de seguridad.",
  why_cta_text:         "¿Listo para fortalecer a tu equipo? ",
  why_cta_contact:      "Contáctanos",
  why_cta_button:       "Comunícate Ahora",

  // Sección “Certificaciones que obtendrás”
  certs_obtendras_title: "Certificaciones que obtendrás",
  certs_obtendras_desc:  "Nuestros graduados como Diego, Valentina y Martín ya están implementando sus conocimientos en importantes organizaciones",
  cert_obt1:             "AISP – Profesional en Seguridad de IA",
  cert_obt2:             "CAISE – Experto en Seguridad de IA Certificado",
  cert_obt3:             "AIGP – Profesional de gobernanza de IA",

  // Sección Testimonios
  testimonials_title:         "Testimonios",
  testimonials_desc:          "Lo que dicen nuestros graduados tras certificarse con Ultra Deep Tech",
  testimonials_pablo_text:    "“La certificación AISP de Ultra Deep Tech elevó mi perfil profesional en el sector público.”",
  testimonials_valentina_text:"“Gracias a la formación CAISE, ahora lidero auditorías de IA con total confianza y rigurosidad.”",
  testimonials_camila_text: "La certificación AISP me proporcionó herramientas prácticas para mejorar la seguridad de nuestros sistemas de IA.",


  // Disclaimer legal
  disclaimer_text: "Los logotipos mostrados en este sitio reflejan alineación con normas internacionales, solicitudes de alianzas en proceso, o certificaciones propias emitidas legalmente por nuestra institución. No reclamamos acreditación oficial salvo que se indique expresamente.",
    // Hero / Banner
    hero_title1:        "Formación en Seguridad de IA para Gobiernos y Empresas",
    hero_subtitle1:     "Capacite a su equipo con cursos diseñados para garantizar cumplimiento, privacidad y resiliencia frente a amenazas de IA.",
    hero_cta:           "Ver Más",
  
    // About
    about_video_link:   "Ver Video",
    about_formationheader:      "Formación Certificada en Seguridad de IA",
    about_formation:  "En Ultra Deep Tech combinamos experiencia, certificaciones profesionales y alianzas estratégicas para ofrecer una capacitación de élite en seguridad de inteligencia artificial:",
  
    // Certificados
    certs_aisp_title:   "Certificaciones AISP, CAISE y AIGP",
    certs_aisp_desc:    "Diplomas propios que avalan competencias avanzadas en detección de amenazas, gobierno y protección de IA.",
    certs_isc_title:    "Alianzas con ISC², EC-Council, CESSI y Fintech",
    certs_isc_desc:     "Formación oficial respaldada por líderes en ciberseguridad y tecnología financiera.",
    certs_iso_title:    "Alineamiento con ISO, NIST, UNESCO y OCDE",
    certs_iso_desc:     "Programas diseñados siguiendo estándares internacionales de seguridad y ética en IA.",
    certs_methodology_title: "Metodología Práctica y Personalizada",
    certs_methodology_desc:  "Ejercicios y casos de estudio adaptados a los retos de tu organización para garantizar resultados reales.",
  

  
    // Cert Section
    cert_section_title: "Forma a tu equipo con nuestras Certificaciones",
    cert1_name:         "AI Security Professional",
    cert1_desc:         "Con la certificación AISP, tu empresa demostrará a clientes, inversores y auditores que cuenta con un equipo capaz de anticipar y neutralizar ciberamenazas basadas en IA, fortaleciendo la confianza institucional y garantizando la continuidad operativa.",
    cert1_code:         "AISP-80012-ARG",
    cert2_name:         "AI Security Expert",
    cert2_desc:         "El programa CAISE forma a tus líderes en técnicas avanzadas de defensa y auditoría de sistemas de IA, aportando un diferencial estratégico en licitaciones y proyectos de alta complejidad, y asegurando el cumplimiento normativo más exigente.",
    cert2_code:         "CAISE-50045-ARG",
    cert3_name:         "AI Governance Professional",
    cert3_desc:         "AIGP capacita a tu alta gerencia en el diseño e implementación de gobernanza de IA, estableciendo políticas y métricas que aseguren transparencia, responsabilidad y alineación con estándares internacionales, clave para la reputación corporativa.",
    cert3_code:         "AIGP-61008-ARG",
  
    // Stats
    stats_courses:      "Cursos Impartidos",
    stats_participants: "Participantes Capacitados",
    stats_hours:        "Horas de Formación",
    stats_certificates: "Certificados Emitidos",
  
    // CTA
    cta_title:          "No esperes más",
    cta_desc:           "Da el siguiente paso para proteger y certificar a tu equipo en seguridad de IA.\n¡Impulsa la confianza de tus clientes y fortalece tu reputación corporativa!",
    cta_button:         "Certifícate Ahora",
  
    // Alliances
    alliances_title:    "Alianzas y Membresías",
    alliances_desc:     "Combinamos nuestro estatus de Miembros Activos y aplicaciones en curso para avalar y ofrecer formaciones con estas instituciones:",
    alliance_isc:       "ISC²",
    alliance_isc_desc:  "Aplicando para ofrecer los cursos oficiales CISSP y CCSP con aval de ISC² y formar a tus equipos al más alto nivel de seguridad.",
    alliance_ec:        "EC-Council",
    alliance_ec_desc:   "Aplicando para brindar los programas CEH y CND con certificación oficial EC-Council, garantizando experiencia práctica y acreditación reconocida.",
    alliance_cessi:     "CESSI",
    alliance_cessi_desc:"Miembro Activo de CESSI - Cámara de Empresas de Software y Servicios Informáticos, lo que avala nuestros workshops y seminarios.",
    alliance_fintech:   "Fintech",
    alliance_fintech_desc:"Miembro de la Cámara Argentina Fintech, respaldo esencial para nuestras formaciones en seguridad financiera de IA.",
  
    // Alignment
    alignment_title:     "Lineamientos Internacionales",
    alignment_desc:      "Nuestras certificaciones se desarrollan siguiendo las mejores prácticas y estándares globales de la industria.",
    alignment_iso:       "ISO/IEC 27001",
    alignment_iso_desc:  "Seguimos los controles y procesos de seguridad de la información definidos por ISO/IEC 27001.",
    alignment_nist:      "NIST AI RMF",
    alignment_nist_desc: "Nos alineamos con el Marco de Gestión de Riesgos de IA de NIST para garantizar integridad y confiabilidad.",
    alignment_unesco:    "UNESCO AI Ethics",
    alignment_unesco_desc:"Adoptamos las recomendaciones de Ética en IA de UNESCO para promover el uso responsable de la tecnología.",
    alignment_oecd:      "OECD AI Principles",
    alignment_oecd_desc: "Incorporamos los Principios de IA de la OCDE para garantizar transparencia, equidad y seguridad.",
    cursos:"Cursos",
    cta_title1: "Impulsa la seguridad de tu organización",
    cta_desc1: "Asegura el cumplimiento normativo, protege tus datos críticos y fortalece tu liderazgo tecnológico frente a amenazas avanzadas.",
    cta_button1: "Inscríbete Ahora",

     // Comunes
    CommonCloseLabel: "Cerrar",
    CommonClose: "Cerrar",
    CommonRequestInfo: "Solicitar información",

    // AISP
    AISPmodalTitle: "Profesional en Seguridad de IA (AISP)",
    AISPformatLabel: "Formato:",
    AISPformatValue: "Taller intensivo de 3 días (9:00-13:00 cada día)",
    AISPday1Title: "Día 1: Fundamentos de Seguridad en IA",
    AISPday1Item1: "Vulnerabilidades en arquitecturas de IA/ML",
    AISPday1Item2: "Panorama de amenazas",
    AISPday1Item3: "Marcos de evaluación de riesgos",
    AISPday1Item4: "Laboratorio: Ejercicios de identificación de vulnerabilidades",
    AISPday2Title: "Día 2: Vectores de Ataque y Controles",
    AISPday2Item1: "Envenenamiento de datos y ataques adversarios",
    AISPday2Item2: "Vulnerabilidades de inyección de prompts",
    AISPday2Item3: "Implementación de controles defensivos",
    AISPday2Item4: "Laboratorio: Implementación de medidas defensivas",
    AISPday3Title: "Día 3: Despliegue y Respuesta",
    AISPday3Item1: "Pipelines seguros de despliegue",
    AISPday3Item2: "Detección y respuesta a incidentes",
    AISPday3Item3: "Marcos de monitoreo continuo",
    AISPday3Item4: "Evaluación para certificación",
    AISPincludesTitle: "El curso incluye:",
    AISPinclude1: "Materiales de formación de nivel empresarial",
    AISPinclude2: "Certificación digital",
    AISPinclude3: "Acceso a instructores expertos",
    AISPinclude4: "Soporte post-formación",
    AISPpersonalization: "Personalización disponible para necesidades empresariales",

    // CAISE
    CAISEmodalTitle: "Experto en Seguridad de IA (CAISE)",
    CAISEformatLabel: "Formato:",
    CAISEformatValue: "Taller avanzado de 4 días (9:00-13:00 cada día)",
    CAISEday1Title: "Día 1: Arquitectura Avanzada de Seguridad",
    CAISEday1Item1: "Seguridad por diseño para sistemas de IA",
    CAISEday1Item2: "Metodologías de modelado de amenazas",
    CAISEday1Item3: "Implementación de arquitectura Zero-Trust",
    CAISEday1Item4: "Laboratorio: Evaluación de arquitectura",
    CAISEday2Title: "Día 2: Detección Avanzada de Amenazas",
    CAISEday2Item1: "Detección de anomalías basada en ML",
    CAISEday2Item2: "Verificación de integridad de redes neuronales",
    CAISEday2Item3: "Técnicas de análisis conductual",
    CAISEday2Item4: "Laboratorio: Configuración de sistemas de detección",
    CAISEday3Title: "Día 3: Análisis Forense y Pruebas",
    CAISEday3Item1: "Análisis forense de modelos",
    CAISEday3Item2: "Investigación de compromiso en datos de entrenamiento",
    CAISEday3Item3: "Metodologías de pruebas de equipo rojo",
    CAISEday3Item4: "Laboratorio: Investigación forense",
    CAISEday4Title: "Día 4: DevOps Seguro y Certificación",
    CAISEday4Item1: "Seguridad en pipelines CI/CD para IA",
    CAISEday4Item2: "Pruebas automatizadas de seguridad",
    CAISEday4Item3: "Mejores prácticas de gestión de secretos",
    CAISEday4Item4: "Evaluación para certificación",
    CAISEincludesTitle: "El curso incluye:",
    CAISEinclude1: "Materiales de formación de nivel empresarial",
    CAISEinclude2: "Certificación digital",
    CAISEinclude3: "Acceso a instructores expertos",
    CAISEinclude4: "Soporte post-formación",
    CAISEpersonalization: "Personalización disponible para necesidades empresariales",

    // AIGP
    AIGPmodalTitle: "Profesional de Gobernanza de IA (AIGP)",
    AIGPformatLabel: "Formato:",
    AIGPformatValue: "Taller ejecutivo de 3 días (9:00-13:00 cada día)",
    AIGPday1Title: "Día 1: Fundamentos de Gobernanza",
    AIGPday1Item1: "Principios clave de gobernanza",
    AIGPday1Item2: "Estándares internacionales (ISO, NIST, OCDE)",
    AIGPday1Item3: "Requisitos de cumplimiento regulatorio",
    AIGPday1Item4: "Taller: Planificación de marco de gobernanza",
    AIGPday2Title: "Día 2: Riesgo y Ética",
    AIGPday2Item1: "Evaluación de riesgos específicos de IA",
    AIGPday2Item2: "Detección y mitigación de sesgos",
    AIGPday2Item3: "Estrategias de implementación ética",
    AIGPday2Item4: "Taller: Desarrollo de registro de riesgos",
    AIGPday3Title: "Día 3: Implementación y Garantía",
    AIGPday3Item1: "Despliegue de marco de gobernanza",
    AIGPday3Item2: "Requisitos de documentación",
    AIGPday3Item3: "Monitoreo continuo de cumplimiento",
    AIGPday3Item4: "Evaluación para certificación",
    AIGPincludesTitle: "El curso incluye:",
    AIGPinclude1: "Materiales de formación de nivel empresarial",
    AIGPinclude2: "Certificación digital",
    AIGPinclude3: "Acceso a instructores expertos",
    AIGPinclude4: "Soporte post-formación",
    AIGPpersonalization: "Personalización disponible para necesidades empresariales"


    
  
    
}
};

// justo después:
translations.en.typewriter_phrases = [
  "In The Cloud", "On Your Premises", "In Your Browser", "In Your Network",
  "For Your Employees", "For Your Data", "For Your Compliance", "For Your Ethics",
  "For Your Business", "Everywhere", "All The Time", "24/7", "365 Days", "For You"
];
translations.es.typewriter_phrases = [
  "En la Nube", "En Tus Instalaciones", "En Tu Navegador", "En Tu Red",
  "Para Tus Empleados", "Para Tus Datos", "Para Tu Cumplimiento", "Para Tu Ética",
  "Para Tu Negocio", "Donde Sea", "Todo El Tiempo", "24/7", "365 Días", "Para Ti"
];

// Añade al final de lang.js:
function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem('site_lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang   = urlParams.get('lang');              // <-- Nueva línea
  const saved     = localStorage.getItem('site_lang');
  const browser   = navigator.language.slice(0,2);
  const initial   = urlLang                             // <-- da prioridad al parámetro
                     || saved
                     || (['es','en'].includes(browser) ? browser : 'en');

  // 1) Traducciones estáticas
  setLanguage(initial);

  // 2) Inicializar typewriter si existe
  const elStatic = document.getElementById('typewriter-drescription');
  if (elStatic) elStatic.textContent = translations[initial].hero_title;
  const titles = translations[initial].typewriter_phrases;
  const elDyn  = document.getElementById('typewriter-title');
  let idx = 0, chr = 0;
  function typeWriter() {
    if (!elDyn) return;
    if (chr < titles[idx].length) {
      elDyn.textContent += titles[idx].charAt(chr++);
      setTimeout(typeWriter, 80);
    } else {
      setTimeout(() => {
        chr = 0; idx = (idx + 1) % titles.length;
        elDyn.textContent = '';
        typeWriter();
      }, 1500);
    }
  }
  setTimeout(typeWriter, 1000);

  // 3) Toggle idioma
  document.getElementById('lang-toggle')?.addEventListener('click', () => {
    const current = localStorage.getItem('site_lang') || initial;
    const next = current === 'en' ? 'es' : 'en';
  
    // Actualiza lang en localStorage
    localStorage.setItem('site_lang', next);
  
    // Actualiza la URL con el nuevo idioma y recarga
    const url = new URL(window.location.href);
    url.searchParams.set('lang', next);
    window.location.href = url.toString();
  });
  
});


function setLanguage(lang) {
  // 1) textos normales
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // 2) placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  localStorage.setItem('site_lang', lang);
}

