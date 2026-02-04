import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/landing/Footer";
import { FileText } from "lucide-react";

const Terms = () => {
  const sections = [
    {
      number: 1,
      title: "Définitions",
      intro: "Dans le présent document :",
      items: [
        "« Plateforme » désigne le site web monprojetmaison.ca et tous les services associés",
        "« Utilisateur » désigne toute personne physique ou morale utilisant la Plateforme",
        "« Propriétaire » désigne une personne planifiant un projet de construction ou rénovation",
        "« Professionnel » désigne un entrepreneur, architecte, designer ou autre professionnel inscrit sur la Plateforme",
        "« Projet » désigne toute construction, rénovation ou amélioration résidentielle",
        "« Contenu » désigne tout texte, image, vidéo, document ou autre matériel publié sur la Plateforme",
      ],
    },
    {
      number: 2,
      title: "Description des services",
      intro: "Monprojetmaison.ca offre une plateforme en ligne permettant de :",
      items: [
        "Planifier et gérer des projets de construction et rénovation résidentielle",
        "Connecter les propriétaires avec des professionnels qualifiés",
        "Estimer les coûts et délais de projet",
        "Accéder à des ressources et outils de planification",
        "Communiquer et collaborer sur des projets",
        "Partager et stocker des documents de projet",
      ],
      footer: "La Plateforme agit comme intermédiaire et ne fournit pas directement de services de construction ou rénovation. Les contrats pour les travaux sont conclus directement entre les Propriétaires et les Professionnels.",
    },
    {
      number: 3,
      title: "Inscription et compte utilisateur",
      intro: "Pour utiliser certaines fonctionnalités de la Plateforme, vous devez créer un compte. Vous vous engagez à :",
      items: [
        "Fournir des informations exactes, complètes et à jour",
        "Maintenir la confidentialité de vos identifiants de connexion",
        "Être âgé d'au moins 18 ans ou avoir le consentement parental",
        "Notifier immédiatement Monprojetmaison.ca de toute utilisation non autorisée de votre compte",
        "N'utiliser qu'un seul compte par personne ou entité",
        "Ne pas partager votre compte avec d'autres personnes",
      ],
      footer: "Vous êtes responsable de toutes les activités effectuées sous votre compte. Monprojetmaison.ca se réserve le droit de suspendre ou résilier tout compte en cas de violation de ces conditions.",
    },
    {
      number: 4,
      title: "Obligations des utilisateurs",
      intro: "En utilisant la Plateforme, vous vous engagez à NE PAS :",
      items: [
        "Violer toute loi ou règlement applicable au Québec ou au Canada",
        "Publier du contenu illégal, offensant, diffamatoire ou frauduleux",
        "Usurper l'identité d'une autre personne ou entité",
        "Transmettre des virus, malwares ou tout code malveillant",
        "Tenter d'accéder sans autorisation aux systèmes de la Plateforme",
        "Utiliser des robots, scrapers ou outils automatisés sans permission",
        "Harceler, menacer ou intimider d'autres utilisateurs",
        "Publier de fausses évaluations ou témoignages",
        "Contourner les mesures de sécurité de la Plateforme",
        "Utiliser la Plateforme à des fins commerciales non autorisées",
      ],
      footer: "Toute violation de ces obligations peut entraîner la suspension immédiate de votre compte et des poursuites judiciaires si nécessaire.",
    },
    {
      number: 5,
      title: "Responsabilités des professionnels",
      intro: "Les Professionnels inscrits sur la Plateforme s'engagent à :",
      items: [
        "Détenir toutes les licences, permis et assurances requis au Québec",
        "Fournir des informations véridiques sur leurs qualifications et expérience",
        "Respecter les codes du bâtiment et normes de construction applicables",
        "Maintenir une assurance responsabilité civile adéquate",
        "Communiquer de manière professionnelle et courtoise",
        "Honorer les devis et engagements pris envers les Propriétaires",
        "Divulguer tout conflit d'intérêts potentiel",
      ],
      footer: "Monprojetmaison.ca ne vérifie pas de manière exhaustive les qualifications de tous les Professionnels. Les Propriétaires sont encouragés à effectuer leur propre vérification diligente, incluant la validation des licences RBQ et des références.",
    },
    {
      number: 6,
      title: "Propriété intellectuelle",
      intro: "Contenu de Monprojetmaison.ca : Tout le contenu de la Plateforme, incluant le logo, le design, les textes, graphiques, logiciels et bases de données, est protégé par les lois sur le droit d'auteur et appartient à Monprojetmaison.ca ou à ses concédants de licence. En publiant du contenu sur la Plateforme, vous :",
      items: [
        "Conservez tous les droits de propriété sur votre contenu",
        "Accordez à Monprojetmaison.ca une licence mondiale, non exclusive, libre de redevances pour utiliser, afficher, reproduire et distribuer votre contenu dans le cadre de la fourniture de nos services",
        "Garantissez que vous détenez tous les droits nécessaires sur le contenu publié",
        "Acceptez que votre contenu puisse être visible par d'autres utilisateurs",
      ],
      footer: "Monprojetmaison.ca respecte les droits de propriété intellectuelle. Si vous estimez qu'un contenu viole vos droits, veuillez nous contacter immédiatement.",
    },
    {
      number: 7,
      title: "Paiements et frais",
      intro: "La Plateforme peut offrir des fonctionnalités gratuites et payantes. Les conditions applicables incluent :",
      items: [
        "Les frais d'abonnement ou de service sont clairement indiqués avant tout achat",
        "Les paiements sont traités via des processeurs tiers sécurisés",
        "Tous les frais sont en dollars canadiens (CAD) sauf indication contraire",
        "Les taxes applicables (TPS/TVQ) seront ajoutées selon les lois québécoises",
        "Les abonnements sont renouvelés automatiquement sauf annulation",
        "Les remboursements sont accordés selon notre politique de remboursement",
      ],
      footer: "Important : Les paiements entre Propriétaires et Professionnels pour les travaux sont effectués directement entre les parties. Monprojetmaison.ca ne collecte pas ces paiements et n'est pas responsable des différends contractuels.",
    },
    {
      number: 8,
      title: "Limitation de responsabilité",
      intro: "DANS LA MESURE MAXIMALE PERMISE PAR LA LOI :",
      items: [
        "La Plateforme est fournie « telle quelle » sans garantie d'aucune sorte",
        "Monprojetmaison.ca n'est pas responsable de la qualité, de la sécurité ou de la légalité des services fournis par les Professionnels",
        "Monprojetmaison.ca ne garantit pas que la Plateforme sera ininterrompue, sécurisée ou exempte d'erreurs",
        "Monprojetmaison.ca n'est pas partie aux contrats entre Propriétaires et Professionnels",
        "Monprojetmaison.ca ne sera pas responsable des dommages indirects, consécutifs, spéciaux ou punitifs",
        "La responsabilité totale de Monprojetmaison.ca envers vous ne dépassera pas le montant que vous avez payé pour utiliser la Plateforme au cours des 12 derniers mois",
      ],
      footer: "Avis important : Vous êtes responsable de vérifier les licences, assurances et références de tout Professionnel avant de conclure un contrat. Monprojetmaison.ca recommande fortement d'obtenir plusieurs soumissions et de consulter des experts indépendants pour les projets majeurs.",
      isWarning: true,
    },
    {
      number: 9,
      title: "Indemnisation",
      intro: "Vous acceptez d'indemniser et de dégager de toute responsabilité Monprojetmaison.ca, ses dirigeants, employés et partenaires contre toute réclamation, perte, responsabilité, dommage, coût ou dépense (y compris les frais juridiques raisonnables) découlant de :",
      items: [
        "Votre utilisation de la Plateforme",
        "Votre violation de ces Conditions d'utilisation",
        "Votre violation des droits d'un tiers",
        "Tout contenu que vous publiez sur la Plateforme",
        "Tout différend entre vous et un autre utilisateur",
        "Les travaux effectués par un Professionnel que vous avez engagé via la Plateforme",
      ],
    },
    {
      number: 10,
      title: "Résolution des différends",
      intro: "En cas de différend concernant l'utilisation de la Plateforme :",
      items: [
        "Vous acceptez d'abord de tenter de résoudre le différend de manière informelle en nous contactant",
        "Si le différend ne peut être résolu à l'amiable, les parties peuvent recourir à la médiation",
        "Ces Conditions sont régies par les lois de la province de Québec et les lois fédérales du Canada",
        "Tout litige sera soumis à la compétence exclusive des tribunaux de Laval, Québec",
      ],
      footer: "Différends entre utilisateurs : Les différends entre Propriétaires et Professionnels concernant les travaux doivent être résolus directement entre les parties. Monprojetmaison.ca peut faciliter la communication mais n'agit pas comme médiateur ou arbitre.",
    },
    {
      number: 11,
      title: "Suspension et résiliation",
      intro: "Monprojetmaison.ca se réserve le droit de :",
      items: [
        "Suspendre ou résilier votre compte à tout moment pour violation de ces Conditions",
        "Supprimer tout contenu qui viole ces Conditions ou les lois applicables",
        "Modifier ou interrompre la Plateforme (en tout ou en partie) temporairement ou définitivement",
        "Refuser le service à quiconque pour quelque raison que ce soit",
      ],
      footer: "Résiliation par l'utilisateur : Vous pouvez résilier votre compte à tout moment via les paramètres de votre compte ou en nous contactant. La résiliation n'affecte pas vos obligations existantes envers d'autres utilisateurs ou Monprojetmaison.ca. Effet de la résiliation : En cas de résiliation, vous perdez l'accès à votre compte et aux données associées. Nous conserverons certaines informations conformément à notre Politique de confidentialité et aux exigences légales.",
    },
    {
      number: 12,
      title: "Liens vers des sites tiers",
      intro: "La Plateforme peut contenir des liens vers des sites web ou services tiers qui ne sont pas détenus ou contrôlés par Monprojetmaison.ca.",
      items: [],
      footer: "Monprojetmaison.ca n'assume aucune responsabilité quant au contenu, aux politiques de confidentialité ou aux pratiques de tout site ou service tiers. Vous reconnaissez et acceptez que Monprojetmaison.ca ne sera pas responsable, directement ou indirectement, de tout dommage causé par l'utilisation de ces sites ou services. Nous vous recommandons fortement de lire les conditions d'utilisation et les politiques de confidentialité de tout site tiers que vous visitez.",
    },
    {
      number: 13,
      title: "Force majeure",
      intro: "Monprojetmaison.ca ne sera pas tenue responsable de tout retard ou défaut d'exécution résultant de causes échappant à son contrôle raisonnable, incluant mais sans s'y limiter :",
      items: [
        "Catastrophes naturelles (inondations, tremblements de terre, tempêtes)",
        "Actes de guerre, terrorisme ou émeutes civiles",
        "Pannes de systèmes informatiques ou de télécommunications",
        "Actes gouvernementaux, grèves ou conflits de travail",
        "Interruptions de services Internet ou d'infrastructure cloud",
        "Cyberattaques ou violations de sécurité",
      ],
    },
    {
      number: 14,
      title: "Modifications des conditions",
      intro: "Monprojetmaison.ca se réserve le droit de modifier ces Conditions d'utilisation à tout moment. Les modifications entrent en vigueur dès leur publication sur la Plateforme. En cas de modifications importantes, nous vous informerons par :",
      items: [
        "Notification par courriel à l'adresse associée à votre compte",
        "Message d'alerte sur la Plateforme lors de votre prochaine connexion",
        "Publication d'un avis sur la page d'accueil",
      ],
      footer: "Votre utilisation continue de la Plateforme après la publication des modifications constitue votre acceptation des nouvelles conditions. Si vous n'acceptez pas les modifications, vous devez cesser d'utiliser la Plateforme et résilier votre compte.",
    },
    {
      number: 15,
      title: "Dispositions générales",
      intro: "Clauses importantes :",
      items: [
        "Intégralité de l'accord : Ces Conditions constituent l'intégralité de l'accord entre vous et Monprojetmaison.ca concernant l'utilisation de la Plateforme",
        "Divisibilité : Si une disposition de ces Conditions est jugée invalide ou inapplicable, les autres dispositions demeureront en vigueur",
        "Renonciation : Le défaut de Monprojetmaison.ca d'exercer un droit prévu par ces Conditions ne constitue pas une renonciation à ce droit",
        "Cession : Vous ne pouvez pas céder ces Conditions sans notre consentement écrit préalable. Monprojetmaison.ca peut céder ces Conditions à tout moment",
        "Versions linguistiques : Ces Conditions sont rédigées en français. En cas de traduction, la version française prévaudra en cas de conflit",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <FileText className="h-4 w-4" />
                En vigueur depuis : Janvier 2026
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Conditions{" "}
                <span className="text-primary">d'utilisation</span>
              </h1>
              
              <p className="text-lg text-muted-foreground">
                Veuillez lire attentivement ces conditions avant d'utiliser la plateforme Monprojetmaison.ca.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Agreement Banner */}
        <section className="py-8">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
                <h2 className="font-display text-xl font-semibold mb-3">Accord légal</h2>
                <p className="text-muted-foreground">
                  En accédant et en utilisant la plateforme Monprojetmaison.ca (ci-après « la Plateforme »), vous acceptez d'être lié par ces Conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre Plateforme. Ces conditions constituent un contrat légalement contraignant entre vous et Monprojetmaison.ca.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8 pb-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {sections.map((section) => (
                  <div key={section.number} className="relative">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-lg">
                        {section.number}
                      </div>
                      
                      <div className="flex-1">
                        <h2 className="font-display text-2xl font-semibold mb-4">
                          {section.title}
                        </h2>
                        
                        <div className="text-muted-foreground space-y-4">
                          <p>{section.intro}</p>
                          
                          {section.items.length > 0 && (
                            <ul className="space-y-2 ml-4">
                              {section.items.map((item, index) => (
                                <li key={index} className="flex gap-2">
                                  <span className="text-primary">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          
                          {section.footer && (
                            <div className={`mt-4 ${section.isWarning ? 'p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20' : ''}`}>
                              <p className="text-sm">{section.footer}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Section */}
              <div className="mt-16 p-8 rounded-2xl bg-muted/50 border">
                <h2 className="font-display text-2xl font-semibold mb-4">
                  Questions sur ces conditions
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  Si vous avez des questions concernant ces Conditions d'utilisation, veuillez nous contacter :
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-xl">
                      📧
                    </div>
                    <div>
                      <p className="font-medium">Courriel</p>
                      <a 
                        href="mailto:juridique@monprojetmaison.ca" 
                        className="text-primary hover:underline"
                      >
                        juridique@monprojetmaison.ca
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-xl">
                      📍
                    </div>
                    <div>
                      <p className="font-medium">Adresse</p>
                      <p className="text-muted-foreground">
                        Monprojetmaison.ca<br />
                        Laval, Québec, Canada
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 rounded-lg bg-background border text-sm text-muted-foreground">
                  <strong>Avis légal :</strong> Ces Conditions d'utilisation sont conformes aux lois du Québec et du Canada. Pour toute question juridique spécifique, nous vous recommandons de consulter un avocat qualifié.
                </div>
              </div>

              {/* Footer note */}
              <div className="mt-12 text-center text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} Monprojetmaison.ca. Tous droits réservés.</p>
                <p className="mt-1 text-xs">Dernière révision : Janvier 2026</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
