# Mail Speghetti Template Builder

> This component is made to generate html templates. The idea is to have the template builder generate the html components. And save it in a mongo database.

# Solution Architecture

- React Js
- Redux 

# Getting Started

```bash
git clone https://github.com/mailspaghetti/template-builder && cd template-builder
```

# Code Structure
└── src

    ├── api
    
    │   ├── apiHandler.js
    
    │   └── userApi.js
    
    ├── common
    
    │   ├── components
    
    │   │   └── ProfileComponent.js
    
    │   └── containers
    
    │       └── ProfileContainer.js
    
    ├── pages
    
    │   └── HomePage
    
    │       ├── components
    
    │       │   ├── ArticleListComponent.js
    
    │       │   ├── CategoryComponent.js
    
    │       │   └── HomePageComponent.js
    
    │       └── HomePageContainer.js
    
    ├── state
    
    │   ├── store.js
    
    ├── reducers
    
    │   ├── homeReducer.js
    
    │   └── userReducer.js
    
    └── utils
    
        └── authUtils.js 
        
    ├── index.js
    
    ├── routes.js
    

## components
Presentational components
## containers 
Logical container for the related components on a specific page.
## actions
Redux actions
## reducers
Redux reducers
## api
API calls files.
## Utils
Utilities files
## store.js 
Storage
## routes.js
Routes to facilitaty access.
