# TypeScript Automation Framework

Complete TypeScript learning framework with examples for test automation.

## Author
**Suresh - Software Trainer**

## Framework Structure

```
automation-framework/
├── package.json              # Project dependencies
├── tsconfig.json            # TypeScript configuration
├── README.md                # This file
├── src/                     # Source code with examples
│   ├── 01-typescript-introduction/
│   │   └── typescript-benefits.ts
│   ├── 02-basic-types/
│   │   ├── primitive-types.ts
│   │   ├── type-annotations.ts
│   │   └── type-inference.ts
│   ├── 03-variables-functions/
│   │   ├── variables.ts
│   │   ├── functions.ts
│   │   └── arrow-functions.ts
│   └── 04-collections/
│       ├── arrays.ts
│       ├── tuples.ts
│       └── enums.ts
├── tests/                   # Playwright tests (future)
├── utils/                   # Utility functions (future)
└── config/                  # Configuration files (future)

## Installation

```bash
# Install dependencies
npm install

# Build TypeScript files
npm run build

# Watch mode for development
npm run build:watch
```

## TypeScript Compilation

The framework is configured with strict TypeScript settings for maximum type safety:

- Target: ES2022
- Module: CommonJS
- Strict mode enabled
- Source maps generated
- Declaration files generated

## Topics Covered

### 1. TypeScript Introduction
- Benefits of TypeScript over JavaScript
- Type safety and error detection
- IDE support and autocomplete
- Self-documenting code

### 2. Basic Types
- **Primitive Types**: number, string, boolean, null, undefined, symbol, bigint
- **Type Annotations**: Explicit type declarations
- **Type Inference**: Automatic type detection

### 3. Variables & Functions
- **Variables**: let, const, var (avoid)
- **Functions**: Declarations, expressions, parameters, return types
- **Arrow Functions**: Syntax, this binding, use cases

### 4. Collections
- **Arrays**: Methods, iteration, transformation, search
- **Tuples**: Fixed-length typed arrays
- **Enums**: Named constants, numeric and string enums

## Usage Examples

### Running Individual Files

```bash
# Compile and run a specific file
npx ts-node src/01-typescript-introduction/typescript-benefits.ts

# Or compile first
npm run build
node dist/01-typescript-introduction/typescript-benefits.js
```

### Importing in Your Code

```typescript
// Import from arrays module
import { TestCase, TestDataProvider } from './src/04-collections/arrays';

// Import from enums module
import { BrowserType, ExecutionStatus } from './src/04-collections/enums';

// Import from functions module
import { runTest, executeTest } from './src/03-variables-functions/functions';
```

## Next Steps (To Be Added)

- Interfaces and Type Aliases
- Classes and Constructors
- Inheritance and Abstract Classes
- OOP Principles (Encapsulation, Abstraction, Inheritance, Polymorphism)
- Playwright Test Integration
- Page Object Model Examples
- Test Data Management
- Configuration Management
- Reporting and Logging

## Key Features

✅ Comprehensive JSDoc comments for all code
✅ Real-world automation examples
✅ Best practices and anti-patterns
✅ Type-safe code examples
✅ Practical test automation scenarios
✅ Clear explanations of concepts

## Learning Path

1. Start with **TypeScript Introduction** to understand the "why"
2. Learn **Basic Types** to grasp TypeScript's type system
3. Master **Variables & Functions** for core programming concepts
4. Explore **Collections** (Arrays, Tuples, Enums) for data management
5. Continue with Interfaces, Classes, and OOP (coming soon)
6. Apply knowledge with Playwright integration (coming soon)

## Best Practices Highlighted

- Type safety over flexibility
- Explicit over implicit
- Immutability where possible
- Clear naming conventions
- Comprehensive documentation
- Real-world examples
- Reusable patterns

## Contributing

This framework is designed for training purposes. Each file is self-contained with:
- Detailed explanations
- Multiple examples
- Best practices
- Anti-patterns to avoid
- Practical automation scenarios

## License

MIT

## Contact

For questions or feedback about this training framework, please reach out to the trainer.

---

**Happy Learning! 🚀**
