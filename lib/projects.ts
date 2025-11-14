export type ProjectStatus = 'active' | 'archived' | 'experimental';

export interface ProjectEntry {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  year: number;
  status: ProjectStatus;
  href?: string;
}

export const projects: ProjectEntry[] = [
  {
    slug: 'agricultural-parcels-llm',
    title: 'Interactive Agricultural Parcels Explorer with LLM',
    description:
      'Co-developing a web app to navigate/extract data from French agricultural parcels and integrated an LLM text-to-SQL assistant for natural language querying and visualization.',
    tags: ['llm', 'py', 'sql' , 'geopandas'],
    year: 2025,
    status: 'active',
  },
  {
    slug: 'water-quality-clustering',
    title: 'Water Quality Clustering and Spatial Interpretation',
    description:
      'Analyzed water quality data to answer questions about water quality and spatial patterns: engineered temporal features, ran K-Means, validated clusters with I2M2, and mapped spatial patterns with CORINE land cover.',
    tags: ['py', 'ml', 'geopandas'],
    year: 2024,
    status: 'archived',
  },
  {
    slug: 'stock-market-forecasting',
    title: 'Stock Market Forecasting using LSTM and Transformers',
    description:
      'Built 5-year equity datasets, trained global and per-stock deep learning models, and benchmarked architectures to highlight the Transformer as the most accurate.',
    tags: ['py', 'deep learning', 'time series'],
    year: 2022,
    status: 'archived',
  },
  {
    slug: 'battery-health-prediction',
    title: 'Battery Health Prediction using ML Models',
    description:
      'Estimated battery State of Health from MIT telemetry, comparing recurrent networks, ensemble methods, and regression models for accuracy and interpretability.',
    tags: ['py', 'ml', 'rnn'],
    year: 2021,
    status: 'archived',
  },
  {
    slug: 'crop-type-classification',
    title: 'Crop Type Classification from Satellite Series',
    description:
      'Labeled agricultural plots by fusing monthly satellite imagery, evaluating multiple deep learning classifiers and ensembles for seasonal robustness.',
    tags: ['py', 'deep learning', 'remote sensing'],
    year: 2022,
    status: 'archived',
  },
  {
    slug: 'circular-codes-analyzer',
    title: 'Circular Codes Analyzer Web Application',
    description:
      'Implemented a Flask UI to analyse circular codes, generate directed graphs, and surface strong comma-free code families for bioinformatics research.',
    tags: ['py', 'web', 'graph', 'bioinformatics', 'flask'],
    year: 2020,
    status: 'archived',
  },
  {
    slug: 'url-shortener-analytics',
    title: 'URL Shortener Platform with Analytics',
    description:
      'Created a Node.js platform for generating short links, storing usage in MongoDB, and monitoring redirection metrics via a custom dashboard.',
    tags: ['nodejs', 'web', 'mongodb'],
    year: 2021,
    status: 'archived',
  },
  {
    slug: 'konkr-clone-cpp',
    title: 'Konkr.io C++ Clone',
    description:
      'Rebuilt the Konkr.io strategy game in C++, including procedural map generation, full combat rules, and AI opponents.',
    tags: ['cpp', 'game'],
    year: 2019,
  status: 'archived',
  },
];
