export const translations = {
  en: {
    // Hero Section
    hero: {
      title: {
        growth: "GROWTH SYSTEMS",
        for: "FOR",
        established: "ESTABLISHED B2B",
        companies: "COMPANIES"
      },
      cta: "Let's talk"
    },
    
    // About Section
    about: {
      title: "We design automated systems to drive growth for our partners"
    },
    
    // Experience Section
    experience: {
      title: "Experience",
      items: [
        "$3M+ REVENUE GENERATED FOR KEY ACCOUNTS",
        "$320K+ COSTS SAVED WITH AUTOMATED OPS SYSTEMS",
        "952+ HOURS FREED WITH CUSTOMER EXPERIENCE SYSTEMS",
        "+ 60 HIGH-TICKET SALES CALLS BOOKED W/ AUTOMATED PIPELINE"
      ]
    },
    
    // Services Section
    services: {
      title: "What We Offer You",
      leadGeneration: {
        title: "Lead Generation Systems",
        items: [
          "AI Cold Email Systems",
          "Application Processing Systems", 
          "Content Management Systems"
        ]
      },
      projectManagement: {
        title: "Project Management Systems",
        items: [
          "AI Automated Fulfillment Systems",
          "AI Onboarding Systems",
          "Project Management Systems"
        ]
      },
      hiringSystems: {
        title: "Hiring Systems",
        items: [
          "Candidate Intake Systems",
          "AI Scoring Systems",
          "Trial Period Systems"
        ]
      },
      salesAdministration: {
        title: "Sales Administration Systems",
        items: [
          "Customized CRM Systems",
          "AI Asset Generator Systems",
          "AI Nurture Systems"
        ]
      }
    },
    
    // CTA Section
    cta: {
      title: "Let's Talk",
      subtitle: "Free Audit • Custom Automation • Guaranteed Value",
      button: "Let's Talk"
    },
    
    // Footer
    footer: {
      copyright: "© 2025 GingerClick — Transforming B2B Growth through premium automated systems"
    }
  },
  
  fr: {
    // Hero Section
    hero: {
      title: {
        growth: "SYSTÈMES DE CROISSANCE",
        for: "POUR",
        established: "ENTREPRISES B2B",
        companies: "ÉTABLIES"
      },
      cta: "Planifier un appel"
    },
    
    // About Section
    about: {
      title: "Nous concevons des systèmes automatisés pour stimuler la croissance de nos partenaires"
    },
    
    // Experience Section
    experience: {
      title: "Expérience",
      items: [
        "3M$+ DE CHIFFRE D'AFFAIRES GÉNÉRÉ POUR DES COMPTES CLÉS",
        "320K$+ DE COÛTS ÉCONOMISÉS AVEC DES SYSTÈMES D'OPÉRATIONS AUTOMATISÉS",
        "952+ HEURES LIBÉRÉES AVEC DES SYSTÈMES D'EXPÉRIENCE CLIENT",
        "+ 60 APPELS DE VENTE HAUTE VALEUR BOOKÉS AVEC PIPELINE AUTOMATISÉ" // ✅ "BOOKÉS" gardé
      ]
    },
    
    // Services Section
    services: {
      title: "Ce que nous vous offrons",
      leadGeneration: {
        title: "Systèmes de Génération de Leads",
        items: [
          "Systèmes de Cold Email automatisés",
          "Systèmes de Traitement des Candidatures", 
          "Systèmes de Gestion de Contenu"
        ]
      },
      projectManagement: {
        title: "Systèmes de Gestion de Projet",
        items: [
          "Systèmes d'Exécution Automatisée IA",
          "Systèmes d'Onboarding automatisés",
          "Systèmes de Gestion de Projet"
        ]
      },
      hiringSystems: {
        title: "Systèmes de Recrutement",
        items: [
          "Systèmes d'Accueil des Candidats",
          "Systèmes de Scoring IA",
          "Systèmes de Période d'Essai"
        ]
      },
      salesAdministration: {
        title: "Systèmes d'Administration des Ventes",
        items: [
          "Systèmes CRM Personnalisés",
          "Systèmes Générateurs d'Assets IA",
          "Systèmes de Nurturing IA"
        ]
      }
    },
    
    // CTA Section
    cta: {
      title: "Planifier un appel",
      subtitle: "Audit Gratuit • Automatisation Personnalisée • Valeur Ajoutée Garantie", // ✅ Correction appliquée
      button: "Planifier un appel"
    },
    
    // Footer
    footer: {
      copyright: "© 2025 GingerClick — Transformer la Croissance B2B grâce à des systèmes automatisés" // ✅ Correction appliquée
    }
  }
}

export type Language = keyof typeof translations
export type TranslationKeys = typeof translations.en
