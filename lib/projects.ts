export interface ProjectEntry {
  title: string;
  titleFr: string;
  description: string;
  descriptionFr: string;
  tags: string[];
}

export const projects: ProjectEntry[] = [
  {
    title: 'Interactive Agricultural Parcels Explorer with LLM',
    titleFr: 'Explorateur de parcelles agricoles avec LLM',
    description:
      'Co-developing (team of four) a web application for exploring French agricultural parcels data; integrated an LLM-powered text-to-SQL assistant enabling natural language queries to retrieve and visualize specific parcels.',
    descriptionFr:
      "Co-développement (équipe de quatre personnes) d'une application Web pour explorer les parcelles agricoles françaises ; intégration d'un assistant LLM text-to-SQL permettant de formuler des requêtes en langage naturel pour retrouver et visualiser des parcelles spécifiques.",
    tags: ['Python', 'LLM', 'Text-to-SQL', 'Dash', 'Plotly', 'GIS Data', 'System Design'],
  },
  {
    title: 'Water Quality Clustering and Spatial Interpretation',
    titleFr: "Clustering de la qualité de l'eau et interprétation spatiale",
    description:
      'Conducted an end-to-end study of French river monitoring data: engineered temporal aggregations, ran K-Means clustering, validated clusters with the biological I2M2 index, and mapped spatial patterns using CORINE land-cover data.',
    descriptionFr:
      "Étude de bout en bout des données de surveillance des cours d'eau français : agrégations temporelles, clustering K-Means, validation par l'indice biologique I2M2, cartographie des motifs spatiaux via les données CORINE Land Cover.",
    tags: ['Python', 'Pandas', 'Scikit-learn', 'GeoPandas', 'Spatial Analysis'],
  },
  {
    title: 'Stock Market Forecasting using LSTM and Transformers',
    titleFr: "Prévision boursière avec LSTM et Transformers",
    description:
      'Engineered a five-year daily equities dataset with 60-day sliding windows, trained multi-stock LSTM and Transformer forecasters alongside company-specific LSTMs, and benchmarked them with MAE, RMSE, and R²—showcasing the Transformer as the most accurate option.',
    descriptionFr:
      "Conception d'un jeu de données boursières sur cinq ans avec fenêtres glissantes de 60 jours, entraînement de modèles LSTM multimarchés, de Transformers et d'LSTM spécifiques par entreprise, puis évaluation via MAE, RMSE et R² — le Transformer étant le plus performant.",
    tags: ['Python', 'PyTorch', 'LSTM', 'Transformers', 'Time Series'],
  },
  {
    title: 'Battery Health Prediction using ML Models',
    titleFr: 'Prédiction de la santé des batteries avec des modèles ML',
    description:
      'Predicted State of Health of batteries using MIT time series data; compared RNNs, Random Forests, and regression models for accuracy and explainability.',
    descriptionFr:
      "Prédiction de l'état de santé des batteries à partir de séries temporelles MIT ; comparaison de RNN, forêts aléatoires et modèles de régression pour l'exactitude et l'explicabilité.",
    tags: ['Python', 'Machine Learning', 'RNN', 'Regression', 'Explainability'],
  },
  {
    title: 'Crop Type Classification from Satellite Image Time Series',
    titleFr: "Classification des cultures à partir d'images satellite temporelles",
    description:
      'Classified agricultural crop types from monthly satellite images per field; compared multiple classification architectures and ensembles.',
    descriptionFr:
      "Classification des types de cultures agricoles à partir d'images satellite mensuelles par parcelle ; comparaison de plusieurs architectures de classification et d'ensembles.",
    tags: ['Python', 'Remote Sensing', 'Deep Learning', 'Classification'],
  },
  {
    title: 'Circular Codes Analyzer Web Application',
    titleFr: "Application Web d'analyse de codes circulaires",
    description:
      'Implemented a Flask-based web app that analyzes circular codes, constructs directed graphs, and visualizes word relationships to classify strong comma-free and comma-free codes.',
    descriptionFr:
      "Implémentation d'une application Web Flask analysant les codes circulaires, construisant des graphes orientés et visualisant les relations entre mots pour identifier les codes forts sans virgule et sans virgule.",
    tags: ['Python', 'Flask', 'Graph Theory', 'Bioinformatics'],
  },
  {
    title: 'URL Shortener Platform with Analytics',
    titleFr: 'Plateforme de raccourcissement d’URL avec analytique',
    description:
      'Built a Node.js web application that shortens URLs, persists link data in MongoDB, and exposes an admin dashboard to inspect usage metrics and manage redirects.',
    descriptionFr:
      "Développement d'une application Web Node.js permettant de raccourcir des URL, de stocker les liens dans MongoDB et de fournir un tableau de bord pour suivre les statistiques d'utilisation et gérer les redirections.",
    tags: ['Node.js', 'Express', 'MongoDB', 'Dashboard', 'Analytics'],
  },
  {
    title: 'Konkr.io C++ Clone',
    titleFr: 'Clone C++ de Konkr.io',
    description:
      'Built a feature-complete clone of the game Konkr.io in C++, implementing game logic, procedural map generation, and opponents to mirror the original mechanics.',
    descriptionFr:
      "Création d'un clone complet du jeu Konkr.io en C++, incluant la logique de jeu, la génération procédurale de cartes et des adversaires reprenant les mécaniques d'origine.",
    tags: ['C++', 'Game Development', 'Object Oriented Programming', 'Procedural Generation'],
  },
];

