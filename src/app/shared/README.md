# ShareModule
**Should** include definitions:

+ application general custom business components

**Should** export all included modules.

**Should not have the `providers` attribute.

## Customize global components or directives

Each component or instruction should have a complete description file, **recommendation** a reasonable directory structure should be:

```
├── components
│   ├── comp1
│   │   ├── index.ts
│   │   ├── README.md
│   ├── comp2
│   │   ├── index.ts
│   │   ├── README.md
├── directives
│   ├── dire1
│   │   ├── index.ts
│   │   ├── README.md
│   ├── dire2
│   │   ├── index.ts
│   │   ├── README.md
```
