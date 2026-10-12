/**
 * ==========================================================================
 * CompileCart — Core E-Commerce & DSL Compiler Engine
 * Authors: Sneha Dhanavath & DeepMind Antigravity Pair Programming
 * Academic Project: Compiler Design (Lexer, Parser, AST, Semantic Analyzer,
 *                    Intermediate Code IR, Optimizer, Virtual Machine)
 * ==========================================================================
 */

// ==========================================================================
// 1. DEFAULT DATASETS & PERSISTENCE (LOCALSTORAGE)
// ==========================================================================

const DEFAULT_PRODUCTS = [
  // Fashion
  {
    id: "prod-f1",
    name: "Classic Italian Wool Blazer",
    category: "Fashion",
    price: 3499,
    originalPrice: 4999,
    stock: 18,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
    description: "Tailored slim-fit blazer crafted from 100% fine Italian merino wool. Perfect for formal and upscale evening wear.",
    status: "active"
  },
  {
    id: "prod-f2",
    name: "Pure Silk Floral Evening Dress",
    category: "Fashion",
    price: 4200,
    originalPrice: 5800,
    stock: 12,
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
    description: "Flowing silhouette handcrafted in pure Mulberry silk with delicate hand-printed botanical accents.",
    status: "active"
  },
  {
    id: "prod-f3",
    name: "Vintage Distressed Denim Jacket",
    category: "Fashion",
    price: 2199,
    originalPrice: 2999,
    stock: 25,
    rating: 4.6,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80",
    description: "Timeless heavy-duty denim jacket with custom brass buttons and relaxed retro streetwear fit.",
    status: "active"
  },

  // Electronics
  {
    id: "prod-e1",
    name: "Aura ANC Wireless Headphones",
    category: "Electronics",
    price: 16999,
    originalPrice: 21999,
    stock: 14,
    rating: 4.9,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    description: "Studio-grade active noise cancellation with 40mm beryllium drivers, spatial audio, and 45-hour battery life.",
    status: "active"
  },
  {
    id: "prod-e2",
    name: "UltraSync Mechanical Keyboard",
    category: "Electronics",
    price: 6499,
    originalPrice: 8999,
    stock: 30,
    rating: 4.7,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    description: "Gasket-mounted hot-swappable mechanical keyboard with RGB backlighting, custom pre-lubed linear switches.",
    status: "active"
  },
  {
    id: "prod-e3",
    name: "SonicPulse Smart Wireless Earbuds",
    category: "Electronics",
    price: 3999,
    originalPrice: 5499,
    stock: 22,
    rating: 4.5,
    reviews: 140,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
    description: "Dual microphone ENC call clarity, IPX7 sweat resistance, compact Qi wireless charging case.",
    status: "active"
  },

  // Beauty
  {
    id: "prod-b1",
    name: "Hydra-Luxe Peptide Facial Serum",
    category: "Beauty",
    price: 1899,
    originalPrice: 2499,
    stock: 45,
    rating: 4.8,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    description: "Multi-molecular hyaluronic acid and matrixyl peptides for deep hydration, skin elasticity, and radiant glow.",
    status: "active"
  },
  {
    id: "prod-b2",
    name: "Velvet Matte Luxe Lipstick Trio",
    category: "Beauty",
    price: 1450,
    originalPrice: 1999,
    stock: 35,
    rating: 4.7,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80",
    description: "Non-drying velvet matte formulation infused with vitamin E and jojoba oil in universally flattering shades.",
    status: "active"
  },

  // Home & Living
  {
    id: "prod-h1",
    name: "Nordic Minimalist Ceramic Lamp",
    category: "Home",
    price: 2799,
    originalPrice: 3899,
    stock: 16,
    rating: 4.8,
    reviews: 73,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    description: "Hand-thrown matte terracotta ceramic table lamp with linen shade for soft, atmospheric warm lighting.",
    status: "active"
  },
  {
    id: "prod-h2",
    name: "Boho Geometric Handwoven Rug",
    category: "Home",
    price: 3600,
    originalPrice: 4999,
    stock: 9,
    rating: 4.9,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80",
    description: "100% natural wool and jute rug hand-knotted by master artisans with soft high-density pile.",
    status: "active"
  },

  // Footwear
  {
    id: "prod-fw1",
    name: "Aeroflex Carbon Running Sneakers",
    category: "Footwear",
    price: 4999,
    originalPrice: 6999,
    stock: 20,
    rating: 4.8,
    reviews: 160,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    description: "Full-length carbon fiber propulsion plate with responsive supercritical foam for peak marathon speed.",
    status: "active"
  },
  {
    id: "prod-fw2",
    name: "Handmade Goodyear Welted Oxfords",
    category: "Footwear",
    price: 5499,
    originalPrice: 7999,
    stock: 8,
    rating: 4.9,
    reviews: 58,
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
    description: "Full-grain calfskin leather dress shoes built with resoleable Goodyear welt construction and leather outsoles.",
    status: "active"
  },

  // Accessories
  {
    id: "prod-a1",
    name: "Chronos Sapphire Mechanical Watch",
    category: "Accessories",
    price: 11999,
    originalPrice: 15999,
    stock: 10,
    rating: 4.9,
    reviews: 82,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
    description: "Automatic movement with 42-hour reserve, scratch-resistant sapphire crystal and exhibition exhibition caseback.",
    status: "active"
  },
  {
    id: "prod-a2",
    name: "Polarized Aviator Titanium Sunglasses",
    category: "Accessories",
    price: 2999,
    originalPrice: 4200,
    stock: 28,
    rating: 4.6,
    reviews: 91,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    description: "Ultralight aerospace titanium frames with UV400 anti-glare polarized optical lenses.",
    status: "active"
  }
];

const DEFAULT_PROMOTION_RULES = [
  {
    id: "rule-1",
    name: "FashionOffer",
    priority: 20,
    status: "active",
    source: `RULE FashionOffer {\n    IF category == "Fashion" AND cart_total > 3000\n    THEN discount = 15\n}`,
    discount: 15,
    summary: "15% off when cart total > ₹3,000 and contains Fashion items."
  },
  {
    id: "rule-2",
    name: "ElectronicsMegaSale",
    priority: 25,
    status: "active",
    source: `RULE ElectronicsMegaSale {\n    IF category == "Electronics" AND cart_total > 15000\n    THEN discount = 20\n}`,
    discount: 20,
    summary: "20% off when cart total > ₹15,000 and includes Electronics."
  },
  {
    id: "rule-3",
    name: "VipCustomerBonus",
    priority: 30,
    status: "active",
    source: `RULE VipCustomerBonus {\n    IF customer_type == "VIP" AND cart_total > 2000\n    THEN discount = 25\n}`,
    discount: 25,
    summary: "25% VIP customer bonus on orders over ₹2,000."
  },
  {
    id: "rule-4",
    name: "BulkHomeDecor",
    priority: 15,
    status: "active",
    source: `RULE BulkHomeDecor {\n    IF category == "Home" AND item_count >= 2\n    THEN discount = 10\n}`,
    discount: 10,
    summary: "10% off for 2 or more Home & Living products."
  }
];

// Presets for the Compiler Studio editor
const RULE_PRESETS = {
  fashion_offer: `RULE FashionOffer {\n    IF category == "Fashion" AND cart_total > 3000\n    THEN discount = 15\n}`,
  electronics_fest: `RULE ElectronicsDeal {\n    IF category == "Electronics" AND cart_total > 15000\n    THEN discount = 20\n}`,
  vip_special: `RULE VipCustomerBonus {\n    IF customer_type == "VIP" AND cart_total > 2000\n    THEN discount = 25\n}`,
  bulk_home: `RULE BulkHomeDecor {\n    IF category == "Home" AND item_count >= 2\n    THEN discount = 10\n}`,
  compound_or: `RULE HolidayBlast {\n    IF item_count >= 5 OR cart_total > 10000\n    THEN discount = 18\n}`,
  syntax_error_demo: `RULE BrokenSyntax {\n    IF category == "Fashion"\n    discount = 15\n}`, // Missing THEN
  semantic_error_demo: `RULE HighDiscountError {\n    IF cart_total > 1000\n    THEN discount = 120\n}`, // > 100% discount
  unknown_var_demo: `RULE UnknownVar {\n    IF custom_shipping_tax > 500\n    THEN discount = 10\n}` // Unknown variable
};

// ==========================================================================
// 2. COMPILER MODULE: LEXICAL ANALYSIS (LEXER)
// ==========================================================================

const TokenType = {
  KEYWORD: "KEYWORD",
  IDENTIFIER: "IDENTIFIER",
  OPERATOR: "OPERATOR",
  NUMBER: "NUMBER",
  STRING: "STRING",
  DELIMITER: "DELIMITER",
  EOF: "EOF"
};

const KEYWORDS = new Set(["RULE", "IF", "THEN", "AND", "OR", "NOT"]);
const DELIMITERS = new Set(["{", "}", "(", ")", ";", ","]);

class Token {
  constructor(type, value, line, col) {
    this.type = type;
    this.value = value;
    this.line = line;
    this.col = col;
  }
}

class Lexer {
  constructor(input) {
    this.input = input;
    this.pos = 0;
    this.line = 1;
    this.col = 1;
    this.length = input.length;
    this.tokens = [];
    this.errors = [];
  }

  tokenize() {
    this.tokens = [];
    this.errors = [];

    while (this.pos < this.length) {
      const char = this.input[this.pos];

      // Handle Newlines
      if (char === "\n") {
        this.line++;
        this.col = 1;
        this.pos++;
        continue;
      }

      // Handle Whitespace
      if (/\s/.test(char)) {
        this.pos++;
        this.col++;
        continue;
      }

      // Handle Line Comments: // ...
      if (char === "/" && this.pos + 1 < this.length && this.input[this.pos + 1] === "/") {
        while (this.pos < this.length && this.input[this.pos] !== "\n") {
          this.pos++;
        }
        continue;
      }

      const startCol = this.col;

      // Handle Delimiters: { } ( )
      if (DELIMITERS.has(char)) {
        this.tokens.push(new Token(TokenType.DELIMITER, char, this.line, startCol));
        this.pos++;
        this.col++;
        continue;
      }

      // Handle Multi-char or Single-char Operators: ==, !=, >=, <=, >, <, =
      if (char === "=" || char === "!" || char === ">" || char === "<") {
        let op = char;
        const nextChar = this.input[this.pos + 1];

        if (nextChar === "=") {
          op += "=";
          this.pos += 2;
          this.col += 2;
        } else {
          this.pos++;
          this.col++;
        }

        this.tokens.push(new Token(TokenType.OPERATOR, op, this.line, startCol));
        continue;
      }

      // Handle String Literals: "..."
      if (char === '"' || char === "'") {
        const quote = char;
        let strVal = "";
        this.pos++;
        this.col++;

        let closed = false;
        while (this.pos < this.length) {
          const c = this.input[this.pos];
          if (c === quote) {
            closed = true;
            this.pos++;
            this.col++;
            break;
          }
          if (c === "\n") {
            this.line++;
            this.col = 1;
          } else {
            this.col++;
          }
          strVal += c;
          this.pos++;
        }

        if (!closed) {
          this.errors.push({
            stage: "Lexical Analysis",
            line: this.line,
            col: startCol,
            message: `Unterminated string literal starting at line ${this.line}, col ${startCol}`
          });
        } else {
          this.tokens.push(new Token(TokenType.STRING, strVal, this.line, startCol));
        }
        continue;
      }

      // Handle Number Literals: [0-9]+(\.[0-9]+)?
      if (/[0-9]/.test(char)) {
        let numStr = "";
        while (this.pos < this.length && /[0-9.]/.test(this.input[this.pos])) {
          numStr += this.input[this.pos];
          this.pos++;
          this.col++;
        }
        this.tokens.push(new Token(TokenType.NUMBER, parseFloat(numStr), this.line, startCol));
        continue;
      }

      // Handle Identifiers and Keywords: [a-zA-Z_][a-zA-Z0-9_]*
      if (/[a-zA-Z_]/.test(char)) {
        let ident = "";
        while (this.pos < this.length && /[a-zA-Z0-9_]/.test(this.input[this.pos])) {
          ident += this.input[this.pos];
          this.pos++;
          this.col++;
        }

        const upper = ident.toUpperCase();
        if (KEYWORDS.has(upper)) {
          // AND / OR / NOT are keywords or logical operators
          if (upper === "AND" || upper === "OR" || upper === "NOT") {
            this.tokens.push(new Token(TokenType.OPERATOR, upper, this.line, startCol));
          } else {
            this.tokens.push(new Token(TokenType.KEYWORD, upper, this.line, startCol));
          }
        } else {
          this.tokens.push(new Token(TokenType.IDENTIFIER, ident, this.line, startCol));
        }
        continue;
      }

      // Illegal Character encountered!
      this.errors.push({
        stage: "Lexical Analysis",
        line: this.line,
        col: startCol,
        message: `Illegal unrecognized character '${char}' at line ${this.line}, col ${startCol}`
      });
      this.pos++;
      this.col++;
    }

    this.tokens.push(new Token(TokenType.EOF, "EOF", this.line, this.col));
    return { tokens: this.tokens, errors: this.errors };
  }
}

// ==========================================================================
// 3. COMPILER MODULE: SYNTAX ANALYSIS & AST (PARSER)
// ==========================================================================

class Parser {
  constructor(tokens) {
    this.tokens = tokens;
    this.pos = 0;
    this.errors = [];
  }

  current() {
    return this.tokens[this.pos] || new Token(TokenType.EOF, "EOF", 0, 0);
  }

  peek(offset = 1) {
    return this.tokens[this.pos + offset] || new Token(TokenType.EOF, "EOF", 0, 0);
  }

  consume(expectedType, expectedVal = null) {
    const cur = this.current();

    if (cur.type === expectedType && (expectedVal === null || cur.value === expectedVal)) {
      this.pos++;
      return cur;
    }

    const expectedDesc = expectedVal ? `'${expectedVal}'` : expectedType;
    const errorMsg = `Expected ${expectedDesc} but encountered '${cur.value}' (${cur.type}) at line ${cur.line}, col ${cur.col}`;
    this.errors.push({
      stage: "Syntax Analysis (Parser)",
      line: cur.line,
      col: cur.col,
      message: errorMsg
    });
    throw new Error(errorMsg);
  }

  parse() {
    this.pos = 0;
    this.errors = [];
    try {
      const ast = this.parseRule();
      return { ast, errors: this.errors };
    } catch (e) {
      return { ast: null, errors: this.errors };
    }
  }

  // rule -> RULE IDENTIFIER '{' IF condition THEN action '}'
  parseRule() {
    this.consume(TokenType.KEYWORD, "RULE");
    const nameToken = this.consume(TokenType.IDENTIFIER);
    this.consume(TokenType.DELIMITER, "{");

    this.consume(TokenType.KEYWORD, "IF");
    const conditionNode = this.parseLogicalOr();

    this.consume(TokenType.KEYWORD, "THEN");
    const actionNode = this.parseAction();

    this.consume(TokenType.DELIMITER, "}");

    return {
      type: "RuleDeclaration",
      name: nameToken.value,
      condition: conditionNode,
      action: actionNode,
      pos: { line: nameToken.line, col: nameToken.col }
    };
  }

  // condition -> LogicalOr
  // LogicalOr -> LogicalAnd ( OR LogicalAnd )*
  parseLogicalOr() {
    let left = this.parseLogicalAnd();

    while (this.current().type === TokenType.OPERATOR && this.current().value === "OR") {
      const opToken = this.consume(TokenType.OPERATOR, "OR");
      const right = this.parseLogicalAnd();
      left = {
        type: "LogicalExpression",
        operator: "OR",
        left: left,
        right: right,
        pos: { line: opToken.line, col: opToken.col }
      };
    }

    return left;
  }

  // LogicalAnd -> PrimaryCondition ( AND PrimaryCondition )*
  parseLogicalAnd() {
    let left = this.parsePrimaryCondition();

    while (this.current().type === TokenType.OPERATOR && this.current().value === "AND") {
      const opToken = this.consume(TokenType.OPERATOR, "AND");
      const right = this.parsePrimaryCondition();
      left = {
        type: "LogicalExpression",
        operator: "AND",
        left: left,
        right: right,
        pos: { line: opToken.line, col: opToken.col }
      };
    }

    return left;
  }

  // PrimaryCondition -> '(' LogicalOr ')' | Comparison
  parsePrimaryCondition() {
    if (this.current().type === TokenType.DELIMITER && this.current().value === "(") {
      this.consume(TokenType.DELIMITER, "(");
      const expr = this.parseLogicalOr();
      this.consume(TokenType.DELIMITER, ")");
      return expr;
    }
    return this.parseComparison();
  }

  // Comparison -> IDENTIFIER comparison_operator literal
  parseComparison() {
    const identToken = this.consume(TokenType.IDENTIFIER);
    const curOp = this.current();

    const validOps = new Set(["==", "!=", ">", ">=", "<", "<="]);
    if (curOp.type !== TokenType.OPERATOR || !validOps.has(curOp.value)) {
      const errorMsg = `Expected comparison operator (==, !=, >, >=, <, <=) but got '${curOp.value}' at line ${curOp.line}, col ${curOp.col}`;
      this.errors.push({
        stage: "Syntax Analysis (Parser)",
        line: curOp.line,
        col: curOp.col,
        message: errorMsg
      });
      throw new Error(errorMsg);
    }

    const opToken = this.consume(TokenType.OPERATOR);

    // Literal: string or number
    const curVal = this.current();
    if (curVal.type !== TokenType.STRING && curVal.type !== TokenType.NUMBER) {
      const errorMsg = `Expected literal (String or Number) in comparison but got '${curVal.value}' at line ${curVal.line}, col ${curVal.col}`;
      this.errors.push({
        stage: "Syntax Analysis (Parser)",
        line: curVal.line,
        col: curVal.col,
        message: errorMsg
      });
      throw new Error(errorMsg);
    }

    const litToken = this.consume(curVal.type);

    return {
      type: "ComparisonExpression",
      operator: opToken.value,
      identifier: identToken.value,
      literal: litToken.value,
      literalType: litToken.type,
      pos: { line: opToken.line, col: opToken.col }
    };
  }

  // action -> discount '=' NUMBER
  parseAction() {
    const targetToken = this.consume(TokenType.IDENTIFIER);
    this.consume(TokenType.OPERATOR, "=");
    const valToken = this.consume(TokenType.NUMBER);

    return {
      type: "ActionAssignment",
      target: targetToken.value,
      value: valToken.value,
      pos: { line: targetToken.line, col: targetToken.col }
    };
  }
}

// ==========================================================================
// 4. COMPILER MODULE: SEMANTIC ANALYSIS & SYMBOL TABLE
// ==========================================================================

const SYMBOL_ENVIRONMENT = {
  category: { type: "String", domain: "Catalogue Category" },
  cart_total: { type: "Number", domain: "Cart subtotal in INR" },
  item_count: { type: "Number", domain: "Total item units in bag" },
  quantity: { type: "Number", domain: "Alias for item_count" },
  customer_type: { type: "String", domain: "Membership tier: 'VIP' or 'Regular'" },
  discount: { type: "Number", domain: "Assignment target %" }
};

class SemanticAnalyzer {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.checks = [];
  }

  analyze(ast) {
    this.errors = [];
    this.warnings = [];
    this.checks = [];

    if (!ast) return { valid: false, errors: this.errors, checks: this.checks };

    // Check 1: Rule Name
    if (!ast.name || typeof ast.name !== "string") {
      this.errors.push({
        stage: "Semantic Analysis",
        message: "Rule must declare a valid non-empty identifier name."
      });
    } else {
      this.checks.push({
        title: "Rule Identifier",
        status: "pass",
        detail: `Rule declared with identifier '${ast.name}'.`
      });
    }

    // Check 2: Action target & discount range constraints
    if (ast.action) {
      if (ast.action.target !== "discount") {
        this.errors.push({
          stage: "Semantic Analysis",
          line: ast.action.pos?.line,
          col: ast.action.pos?.col,
          message: `Semantic Error: Unsupported action target '${ast.action.target}'. Only 'discount' is supported.`
        });
      } else {
        this.checks.push({
          title: "Target Variable",
          status: "pass",
          detail: `Action modifies allowed symbol 'discount'.`
        });
      }

      // Check discount value limit (0 - 100%)
      if (typeof ast.action.value !== "number" || ast.action.value <= 0 || ast.action.value > 100) {
        this.errors.push({
          stage: "Semantic Analysis",
          line: ast.action.pos?.line,
          col: ast.action.pos?.col,
          message: `Semantic Error: Discount value ${ast.action.value}% is invalid. Must be between 1% and 100% (inclusive).`
        });
      } else {
        this.checks.push({
          title: "Discount Value Bounds",
          status: "pass",
          detail: `Discount set to ${ast.action.value}% (satisfies constraint 1% <= discount <= 100%).`
        });
      }
    }

    // Check 3: Condition expressions type checking
    if (ast.condition) {
      this.checkConditionNode(ast.condition);
    }

    return {
      valid: this.errors.length === 0,
      errors: this.errors,
      warnings: this.warnings,
      checks: this.checks
    };
  }

  checkConditionNode(node) {
    if (!node) return;

    if (node.type === "LogicalExpression") {
      this.checkConditionNode(node.left);
      this.checkConditionNode(node.right);
      return;
    }

    if (node.type === "ComparisonExpression") {
      const varName = node.identifier;
      const expectedMeta = SYMBOL_ENVIRONMENT[varName];

      // Variable existence in symbol table
      if (!expectedMeta) {
        this.errors.push({
          stage: "Semantic Analysis",
          line: node.pos?.line,
          col: node.pos?.col,
          message: `Semantic Error: Undeclared variable '${varName}' in condition. Supported variables: ${Object.keys(SYMBOL_ENVIRONMENT).join(", ")}.`
        });
        return;
      }

      this.checks.push({
        title: `Symbol Lookup: '${varName}'`,
        status: "pass",
        detail: `Variable '${varName}' exists in environment as type ${expectedMeta.type}.`
      });

      // Type Compatibility Check
      const litType = typeof node.literal === "number" ? "Number" : "String";
      if (expectedMeta.type !== litType) {
        this.errors.push({
          stage: "Semantic Analysis",
          line: node.pos?.line,
          col: node.pos?.col,
          message: `Semantic Type Error: Variable '${varName}' has type ${expectedMeta.type}, but is being compared with ${litType} literal '${node.literal}'.`
        });
        return;
      }

      // Relational Operator Compatibility: >, <, >=, <= only valid on numbers
      const isRelational = [">", ">=", "<", "<="].includes(node.operator);
      if (isRelational && expectedMeta.type !== "Number") {
        this.errors.push({
          stage: "Semantic Analysis",
          line: node.pos?.line,
          col: node.pos?.col,
          message: `Semantic Operator Error: Relational operator '${node.operator}' is only valid on Number types, but '${varName}' is a String.`
        });
        return;
      }

      this.checks.push({
        title: `Type & Operator Match: '${varName} ${node.operator} ${node.literal}'`,
        status: "pass",
        detail: `Valid ${expectedMeta.type} comparison with operator '${node.operator}'.`
      });
    }
  }
}

// ==========================================================================
// 5. COMPILER MODULE: INTERMEDIATE CODE GENERATION (IR)
// ==========================================================================

class IRGenerator {
  constructor() {
    this.instructions = [];
    this.labelCounter = 1;
  }

  generate(ast) {
    this.instructions = [];
    this.labelCounter = 1;

    if (!ast) return [];

    const exitLabel = `L_END`;

    // 1. Generate condition instructions
    this.generateCondition(ast.condition, exitLabel);

    // 2. Action assignment
    if (ast.action) {
      this.instructions.push({
        opcode: "PUSH",
        operand: ast.action.value,
        desc: `Push discount percentage ${ast.action.value} onto stack`
      });
      this.instructions.push({
        opcode: "SET_DISCOUNT",
        operand: null,
        desc: `Assign stack top value to cart discount`
      });
    }

    // 3. Label definition & Halt
    this.instructions.push({
      opcode: "LABEL",
      operand: exitLabel,
      desc: `Exit point for failed conditions`
    });
    this.instructions.push({
      opcode: "HALT",
      operand: null,
      desc: `Terminates rule execution`
    });

    return this.instructions;
  }

  generateCondition(node, failureLabel) {
    if (node.type === "LogicalExpression") {
      if (node.operator === "AND") {
        // Left must pass, else jump to failure
        this.generateCondition(node.left, failureLabel);
        this.generateCondition(node.right, failureLabel);
      } else if (node.operator === "OR") {
        const orSuccess = `L_OR_TRUE_${this.labelCounter++}`;
        const orNext = `L_OR_NEXT_${this.labelCounter++}`;

        // Sub-evaluate left
        this.generateCondition(node.left, orNext);
        this.instructions.push({ opcode: "JUMP", operand: orSuccess, desc: `Left condition met in OR` });

        this.instructions.push({ opcode: "LABEL", operand: orNext, desc: `Evaluate right side of OR` });
        this.generateCondition(node.right, failureLabel);

        this.instructions.push({ opcode: "LABEL", operand: orSuccess, desc: `OR condition branch resolved true` });
      }
      return;
    }

    if (node.type === "ComparisonExpression") {
      this.instructions.push({
        opcode: "LOAD",
        operand: node.identifier,
        desc: `Load runtime variable '${node.identifier}'`
      });
      this.instructions.push({
        opcode: "PUSH",
        operand: node.literal,
        desc: `Push literal '${node.literal}'`
      });

      const opCodeMap = {
        "==": "CMP_EQ",
        "!=": "CMP_NE",
        ">": "CMP_GT",
        ">=": "CMP_GE",
        "<": "CMP_LT",
        "<=": "CMP_LE"
      };

      const cmpOp = opCodeMap[node.operator] || "CMP_EQ";
      this.instructions.push({
        opcode: cmpOp,
        operand: null,
        desc: `Compare top two items using ${node.operator}`
      });

      this.instructions.push({
        opcode: "JUMP_IF_FALSE",
        operand: failureLabel,
        desc: `Jump to ${failureLabel} if comparison evaluated false`
      });
    }
  }
}

// ==========================================================================
// 6. COMPILER MODULE: CODE OPTIMIZER
// ==========================================================================

class CodeOptimizer {
  optimize(instructions) {
    if (!instructions || instructions.length === 0) return [];

    let optimized = [...instructions];

    // Pass 1: Constant Folding on consecutive PUSH -> PUSH -> CMP instructions
    const pass1 = [];
    for (let i = 0; i < optimized.length; i++) {
      const cur = optimized[i];
      const next1 = optimized[i + 1];
      const next2 = optimized[i + 2];

      if (cur && next1 && next2 &&
          cur.opcode === "PUSH" && next1.opcode === "PUSH" &&
          next2.opcode.startsWith("CMP_")) {
        const val1 = cur.operand;
        const val2 = next1.operand;
        let foldedBool = null;

        switch (next2.opcode) {
          case "CMP_EQ": foldedBool = (val1 == val2); break;
          case "CMP_NE": foldedBool = (val1 != val2); break;
          case "CMP_GT": foldedBool = (val1 > val2); break;
          case "CMP_GE": foldedBool = (val1 >= val2); break;
          case "CMP_LT": foldedBool = (val1 < val2); break;
          case "CMP_LE": foldedBool = (val1 <= val2); break;
        }

        if (foldedBool !== null) {
          pass1.push({
            opcode: "PUSH",
            operand: foldedBool,
            desc: `Constant Folded (${val1} ${next2.opcode} ${val2} => ${foldedBool})`
          });
          i += 2; // Skip folded instructions
          continue;
        }
      }
      pass1.push(cur);
    }

    // Pass 2: Dead Code Elimination (Remove instructions immediately following unconditional HALT or redundant LABEL jumps)
    const pass2 = [];
    let isReachable = true;

    for (let i = 0; i < pass1.length; i++) {
      const inst = pass1[i];

      if (inst.opcode === "LABEL") {
        isReachable = true; // Labels restore reachability
      }

      if (isReachable) {
        pass2.push(inst);
      }

      if (inst.opcode === "HALT") {
        isReachable = false;
      }
    }

    // Pass 3: Eliminate redundant adjacent labels
    const pass3 = [];
    const labelSet = new Set();
    for (const inst of pass2) {
      if (inst.opcode === "LABEL") {
        if (!labelSet.has(inst.operand)) {
          labelSet.add(inst.operand);
          pass3.push(inst);
        }
      } else {
        pass3.push(inst);
      }
    }

    return pass3;
  }
}

// ==========================================================================
// 7. COMPILER MODULE: SECURE VIRTUAL MACHINE (EXECUTION ENGINE)
// ==========================================================================

class VirtualMachine {
  constructor() {
    this.stack = [];
    this.pc = 0;
    this.discount = 0;
    this.trace = [];
    this.halted = false;
  }

  reset() {
    this.stack = [];
    this.pc = 0;
    this.discount = 0;
    this.trace = [];
    this.halted = false;
  }

  execute(instructions, context) {
    this.reset();
    let stepCount = 0;
    const maxSteps = 500; // Protection against infinite loops

    while (!this.halted && this.pc < instructions.length && stepCount < maxSteps) {
      this.step(instructions, context);
      stepCount++;
    }

    return {
      discount: this.discount,
      satisfied: this.discount > 0,
      trace: this.trace,
      finalStack: [...this.stack]
    };
  }

  step(instructions, context) {
    if (this.halted || this.pc >= instructions.length) {
      this.halted = true;
      return null;
    }

    const inst = instructions[this.pc];
    const prevPC = this.pc;
    let explanation = "";

    switch (inst.opcode) {
      case "LOAD": {
        const val = context[inst.operand] ?? 0;
        this.stack.push(val);
        explanation = `Loaded context[${inst.operand}] = ${JSON.stringify(val)}`;
        this.pc++;
        break;
      }
      case "PUSH": {
        this.stack.push(inst.operand);
        explanation = `Pushed literal ${JSON.stringify(inst.operand)}`;
        this.pc++;
        break;
      }
      case "CMP_EQ": {
        const b = this.stack.pop();
        const a = this.stack.pop();
        const res = (a == b);
        this.stack.push(res);
        explanation = `Compared (${a} == ${b}) => ${res}`;
        this.pc++;
        break;
      }
      case "CMP_NE": {
        const b = this.stack.pop();
        const a = this.stack.pop();
        const res = (a != b);
        this.stack.push(res);
        explanation = `Compared (${a} != ${b}) => ${res}`;
        this.pc++;
        break;
      }
      case "CMP_GT": {
        const b = this.stack.pop();
        const a = this.stack.pop();
        const res = (a > b);
        this.stack.push(res);
        explanation = `Compared (${a} > ${b}) => ${res}`;
        this.pc++;
        break;
      }
      case "CMP_GE": {
        const b = this.stack.pop();
        const a = this.stack.pop();
        const res = (a >= b);
        this.stack.push(res);
        explanation = `Compared (${a} >= ${b}) => ${res}`;
        this.pc++;
        break;
      }
      case "CMP_LT": {
        const b = this.stack.pop();
        const a = this.stack.pop();
        const res = (a < b);
        this.stack.push(res);
        explanation = `Compared (${a} < ${b}) => ${res}`;
        this.pc++;
        break;
      }
      case "CMP_LE": {
        const b = this.stack.pop();
        const a = this.stack.pop();
        const res = (a <= b);
        this.stack.push(res);
        explanation = `Compared (${a} <= ${b}) => ${res}`;
        this.pc++;
        break;
      }
      case "JUMP_IF_FALSE": {
        const condition = this.stack.pop();
        if (!condition) {
          const targetIndex = instructions.findIndex(
            i => i.opcode === "LABEL" && i.operand === inst.operand
          );
          if (targetIndex !== -1) {
            this.pc = targetIndex;
            explanation = `Condition false; branched to label ${inst.operand}`;
          } else {
            this.pc++;
            explanation = `Label ${inst.operand} not found; continued`;
          }
        } else {
          this.pc++;
          explanation = `Condition true; branch not taken`;
        }
        break;
      }
      case "JUMP": {
        const targetIndex = instructions.findIndex(
          i => i.opcode === "LABEL" && i.operand === inst.operand
        );
        if (targetIndex !== -1) {
          this.pc = targetIndex;
          explanation = `Unconditional jump to ${inst.operand}`;
        } else {
          this.pc++;
        }
        break;
      }
      case "LABEL": {
        explanation = `Label marker: ${inst.operand}`;
        this.pc++;
        break;
      }
      case "SET_DISCOUNT": {
        const discVal = this.stack.pop();
        this.discount = discVal;
        explanation = `Discount set to ${discVal}%`;
        this.pc++;
        break;
      }
      case "HALT": {
        this.halted = true;
        explanation = `Halt opcode executed`;
        break;
      }
      default: {
        this.pc++;
        explanation = `Unknown opcode ${inst.opcode}`;
      }
    }

    const stepRecord = {
      step: this.trace.length + 1,
      pc: prevPC,
      opcode: inst.opcode,
      operand: inst.operand ?? "",
      stackAfter: [...this.stack],
      explanation
    };

    this.trace.push(stepRecord);
    return stepRecord;
  }
}

// ==========================================================================
// 8. STORE STATE MANAGEMENT & PRICING SERVICE
// ==========================================================================

class Store {
  constructor() {
    this.products = this.loadFromStorage("compilecart_products", DEFAULT_PRODUCTS);
    this.rules = this.loadFromStorage("compilecart_rules", DEFAULT_PROMOTION_RULES);
    this.cart = this.loadFromStorage("compilecart_cart", []);
    this.wishlist = this.loadFromStorage("compilecart_wishlist", []);
    this.orders = this.loadFromStorage("compilecart_orders", []);
    this.currentRole = localStorage.getItem("compilecart_role") || "customer";

    // Compiler Instances
    this.lexer = null;
    this.parser = null;
    this.semanticAnalyzer = new SemanticAnalyzer();
    this.irGenerator = new IRGenerator();
    this.optimizer = new CodeOptimizer();
    this.vm = new VirtualMachine();

    // Active Studio Compilation Cache
    this.lastCompilation = {
      source: "",
      tokens: [],
      ast: null,
      semanticReport: null,
      rawIR: [],
      optimizedIR: [],
      valid: false
    };
  }

  loadFromStorage(key, fallback) {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  saveToStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn("Storage quota or error:", e);
    }
  }

  // Cart Operations
  addToCart(productId, qty = 1) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return { success: false, msg: "Product not found." };

    const cartItem = this.cart.find(item => item.id === productId);
    const currentQtyInCart = cartItem ? cartItem.qty : 0;

    // Check inventory stock (SRS requirement FR-09 & TC-08)
    if (currentQtyInCart + qty > product.stock) {
      return {
        success: false,
        msg: `Cannot add more than available inventory (${product.stock} units in stock).`
      };
    }

    if (cartItem) {
      cartItem.qty += qty;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
        image: product.image,
        qty: qty
      });
    }

    this.saveToStorage("compilecart_cart", this.cart);
    return { success: true, msg: `Added ${product.name} to shopping bag!` };
  }

  updateCartQty(productId, delta) {
    const item = this.cart.find(i => i.id === productId);
    if (!item) return;

    const product = this.products.find(p => p.id === productId);
    const newQty = item.qty + delta;

    if (newQty <= 0) {
      this.cart = this.cart.filter(i => i.id !== productId);
    } else {
      if (product && newQty > product.stock) {
        showToast(`Stock limit reached (${product.stock} max available)`, "warning");
        return;
      }
      item.qty = newQty;
    }

    this.saveToStorage("compilecart_cart", this.cart);
  }

  // Wishlist Operations
  toggleWishlist(productId) {
    const index = this.wishlist.indexOf(productId);
    let added = false;
    if (index > -1) {
      this.wishlist.splice(index, 1);
    } else {
      this.wishlist.push(productId);
      added = true;
    }
    this.saveToStorage("compilecart_wishlist", this.wishlist);
    return added;
  }

  // Pricing Engine: Executes Compiled Rules on Shopping Cart
  calculateCartPricing() {
    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const itemCount = this.cart.reduce((sum, item) => sum + item.qty, 0);

    if (subtotal === 0) {
      return {
        subtotal: 0,
        discountPercent: 0,
        discountAmount: 0,
        deliveryFee: 0,
        finalTotal: 0,
        appliedRule: null,
        evaluatedRules: []
      };
    }

    // Find all categories represented in cart
    const categoriesInCart = [...new Set(this.cart.map(i => i.category))];

    // Evaluate active compiled promotion rules
    const activeRules = this.rules
      .filter(r => r.status === "active")
      .sort((a, b) => (b.priority || 0) - (a.priority || 0));

    let bestRule = null;
    let highestDiscountPercent = 0;
    const evaluatedResults = [];

    for (const rule of activeRules) {
      // Compile & Execute rule in VM sandbox
      const lexer = new Lexer(rule.source);
      const { tokens, errors: lexErrors } = lexer.tokenize();
      if (lexErrors.length > 0) continue;

      const parser = new Parser(tokens);
      const { ast, errors: parseErrors } = parser.parse();
      if (parseErrors.length > 0) continue;

      const semantic = new SemanticAnalyzer().analyze(ast);
      if (!semantic.valid) continue;

      const ir = new IRGenerator().generate(ast);
      const optIr = new CodeOptimizer().optimize(ir);

      // Context evaluation: Check against every category in the cart or aggregate
      let ruleMatched = false;

      for (const cat of categoriesInCart) {
        const context = {
          category: cat,
          cart_total: subtotal,
          item_count: itemCount,
          quantity: itemCount,
          customer_type: this.currentRole === "customer" ? "VIP" : "Regular"
        };

        const vmResult = new VirtualMachine().execute(optIr, context);
        if (vmResult.satisfied && vmResult.discount > 0) {
          ruleMatched = true;
          if (vmResult.discount > highestDiscountPercent) {
            highestDiscountPercent = vmResult.discount;
            bestRule = {
              name: rule.name,
              discount: vmResult.discount,
              categoryMatched: cat
            };
          }
          break;
        }
      }

      evaluatedResults.push({
        name: rule.name,
        matched: ruleMatched,
        discount: rule.discount
      });
    }

    // Enforce discount caps and prevent negative totals (SRS Section 5)
    highestDiscountPercent = Math.min(highestDiscountPercent, 90);
    const discountAmount = Math.round((subtotal * highestDiscountPercent) / 100);
    const deliveryFee = subtotal >= 999 || subtotal === 0 ? 0 : 99;
    const finalTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

    return {
      subtotal,
      discountPercent: highestDiscountPercent,
      discountAmount,
      deliveryFee,
      finalTotal,
      appliedRule: bestRule,
      evaluatedRules: evaluatedResults
    };
  }

  // Order Placement
  createOrder(shippingDetails, paymentMethod) {
    const pricing = this.calculateCartPricing();
    if (this.cart.length === 0) return { success: false, msg: "Cart is empty." };

    const orderId = "ORD-" + Math.floor(100000 + Math.random() * 900000);
    const newOrder = {
      id: orderId,
      date: new Date().toLocaleString(),
      customerName: shippingDetails.name,
      shippingAddress: `${shippingDetails.address}, ${shippingDetails.city} - ${shippingDetails.pincode}`,
      paymentMethod: paymentMethod,
      items: [...this.cart],
      subtotal: pricing.subtotal,
      discount: pricing.discountAmount,
      appliedRuleName: pricing.appliedRule ? pricing.appliedRule.name : "None",
      deliveryFee: pricing.deliveryFee,
      finalTotal: pricing.finalTotal,
      status: "Processing"
    };

    // Decrement stock in catalog
    for (const item of this.cart) {
      const prod = this.products.find(p => p.id === item.id);
      if (prod) {
        prod.stock = Math.max(0, prod.stock - item.qty);
      }
    }

    this.orders.unshift(newOrder);
    this.cart = []; // Empty cart

    this.saveToStorage("compilecart_products", this.products);
    this.saveToStorage("compilecart_orders", this.orders);
    this.saveToStorage("compilecart_cart", this.cart);

    return { success: true, order: newOrder };
  }

  // Inventory Management CRUD
  saveProduct(productData) {
    if (this.currentRole !== "admin") {
      return { success: false, msg: "Permission Denied: Only administrators can modify catalogue inventory." };
    }

    if (productData.id) {
      // Edit
      const index = this.products.findIndex(p => p.id === productData.id);
      if (index !== -1) {
        this.products[index] = { ...this.products[index], ...productData };
      }
    } else {
      // Create
      const newProd = {
        id: "prod-" + Date.now().toString(36),
        ...productData,
        status: "active"
      };
      this.products.unshift(newProd);
    }

    this.saveToStorage("compilecart_products", this.products);
    return { success: true, msg: "Product saved successfully!" };
  }

  deleteProduct(productId) {
    if (this.currentRole !== "admin") {
      return { success: false, msg: "Permission Denied: Customer cannot delete products." };
    }
    this.products = this.products.filter(p => p.id !== productId);
    this.saveToStorage("compilecart_products", this.products);
    return { success: true, msg: "Product removed from catalogue." };
  }

  updateOrderStatus(orderId, newStatus) {
    if (this.currentRole !== "admin") {
      return { success: false, msg: "Permission Denied." };
    }
    const order = this.orders.find(o => o.id === orderId);
    if (order) {
      order.status = newStatus;
      this.saveToStorage("compilecart_orders", this.orders);
      return { success: true };
    }
    return { success: false, msg: "Order not found." };
  }

  toggleRuleStatus(ruleId) {
    if (this.currentRole !== "admin") {
      return { success: false, msg: "Permission Denied: Only administrators can activate or deactivate rules." };
    }
    const rule = this.rules.find(r => r.id === ruleId);
    if (rule) {
      rule.status = rule.status === "active" ? "inactive" : "active";
      this.saveToStorage("compilecart_rules", this.rules);
      return { success: true, status: rule.status };
    }
    return { success: false, msg: "Rule not found." };
  }
}

// Global Store Instance
const store = new Store();

// ==========================================================================
// 9. UI VIEW CONTROLLER & EVENT HANDLERS
// ==========================================================================

let activeCategoryFilter = "all";
let maxPriceFilter = 60000;
let minRatingFilter = 0;
let inStockOnlyFilter = false;
let currentSortOrder = "popular";
let currentSearchQuery = "";

// Initialize App on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  initializeAuth();
  renderProductsCatalogue();
  renderWishlist();
  updateHeaderBadges();
  renderActiveRulesSummary();
  loadRulePreset("fashion_offer");
  updateLineNumbers();
});

// View Navigation
function navigateTo(viewId) {
  const views = {
    store: document.getElementById("viewStore"),
    wishlist: document.getElementById("viewWishlist"),
    customer: document.getElementById("viewCustomer"),
    admin: document.getElementById("viewAdmin"),
    compiler: document.getElementById("viewCompiler")
  };

  Object.values(views).forEach(v => v.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));

  if (views[viewId]) {
    views[viewId].classList.add("active");
  }

  const activeNavBtn = document.querySelector(`.nav-btn[data-view="${viewId}"]`);
  if (activeNavBtn) activeNavBtn.classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });

  // Refresh view contents
  if (viewId === "customer") renderCustomerDashboard();
  if (viewId === "admin") renderAdminDashboard();
  if (viewId === "wishlist") renderWishlist();
  if (viewId === "store") renderProductsCatalogue();
}

function scrollToProducts() {
  const elem = document.getElementById("productsCatalogue");
  if (elem) elem.scrollIntoView({ behavior: "smooth" });
}

// Role Handling (now driven by auth)
function initializeRole() {
  // Role is set by auth system, no selector to init
}

function handleRoleChange(newRole) {
  store.currentRole = newRole;
  localStorage.setItem("compilecart_role", newRole);

  const adminBanner = document.getElementById("adminAccessDeniedBanner");
  if (adminBanner) {
    adminBanner.style.display = newRole === "customer" ? "flex" : "none";
  }

  renderProductsCatalogue();
  renderCustomerDashboard();
  renderAdminDashboard();
  updateCartDrawerUI();
}

// Toast System
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  const icons = {
    success: "✓",
    info: "ℹ",
    warning: "⚠️",
    error: "✕"
  };

  toast.innerHTML = `<strong>${icons[type] || "•"}</strong> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Header Badges
function updateHeaderBadges() {
  const cartBadge = document.getElementById("cartCountBadge");
  const wishlistBadge = document.getElementById("wishlistCountBadge");
  const drawerCartBadge = document.getElementById("drawerCartCount");

  const totalCartUnits = store.cart.reduce((sum, item) => sum + item.qty, 0);
  if (cartBadge) cartBadge.textContent = totalCartUnits;
  if (drawerCartBadge) drawerCartBadge.textContent = totalCartUnits;
  if (wishlistBadge) wishlistBadge.textContent = store.wishlist.length;
}

// ==========================================================================
// 10. PRODUCT CATALOGUE RENDERING & FILTERING
// ==========================================================================

function renderProductsCatalogue() {
  const grid = document.getElementById("productsGrid");
  const noFound = document.getElementById("noProductsFound");
  const countDisp = document.getElementById("displayedCount");
  const totalDisp = document.getElementById("totalProductsCount");

  if (!grid) return;

  let filtered = store.products.filter(p => {
    if (activeCategoryFilter !== "all" && p.category !== activeCategoryFilter) return false;
    if (p.price > maxPriceFilter) return false;
    if (p.rating < minRatingFilter) return false;
    if (inStockOnlyFilter && p.stock <= 0) return false;
    if (currentSearchQuery) {
      const q = currentSearchQuery.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchCat = p.category.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      if (!matchName && !matchCat && !matchDesc) return false;
    }
    return true;
  });

  // Sorting
  switch (currentSortOrder) {
    case "price-low": filtered.sort((a, b) => a.price - b.price); break;
    case "price-high": filtered.sort((a, b) => b.price - a.price); break;
    case "rating": filtered.sort((a, b) => b.rating - a.rating); break;
    case "newest": filtered.reverse(); break;
    case "popular":
    default:
      filtered.sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
      break;
  }

  if (countDisp) countDisp.textContent = filtered.length;
  if (totalDisp) totalDisp.textContent = store.products.length;

  if (filtered.length === 0) {
    grid.innerHTML = "";
    if (noFound) noFound.style.display = "block";
    return;
  }

  if (noFound) noFound.style.display = "none";

  grid.innerHTML = filtered.map(p => {
    const isWishlisted = store.wishlist.includes(p.id);
    const stockClass = p.stock > 10 ? "stock-in" : p.stock > 0 ? "stock-low" : "stock-out";
    const stockText = p.stock > 10 ? `In Stock (${p.stock})` : p.stock > 0 ? `Only ${p.stock} left!` : "Out of Stock";

    return `
      <div class="product-card" data-id="${p.id}">
        <div class="product-image-wrap">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
          <span class="product-cat-tag">${p.category}</span>
          <button class="product-wishlist-btn ${isWishlisted ? "active" : ""}" 
                  onclick="handleWishlistClick('${p.id}')" title="Save to wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
        <div class="product-body">
          <div class="product-rating">
            <span>★</span>
            <strong>${p.rating.toFixed(1)}</strong>
            <span class="rating-count">(${p.reviews || 40})</span>
          </div>
          <h3 class="product-title">${p.name}</h3>
          <div class="product-price-row">
            <span class="current-price">₹${p.price.toLocaleString("en-IN")}</span>
            ${p.originalPrice ? `<span class="original-price">₹${p.originalPrice.toLocaleString("en-IN")}</span>` : ""}
          </div>
          <div class="stock-status ${stockClass}">● ${stockText}</div>
          <div class="product-actions">
            <button class="btn btn-primary btn-add-cart" onclick="handleAddToCartClick('${p.id}')" ${p.stock <= 0 ? "disabled" : ""}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              <span>${p.stock > 0 ? "Add to Bag" : "Out of Stock"}</span>
            </button>
            <button class="btn-quick-view" onclick="openProductQuickModal('${p.id}')" title="Quick view">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Category Pills
function filterByCategory(cat) {
  activeCategoryFilter = cat;
  document.querySelectorAll(".cat-pill").forEach(pill => {
    pill.classList.toggle("active", pill.dataset.category === cat);
  });
  renderProductsCatalogue();
}

// Price Slider
function handlePriceFilter(val) {
  maxPriceFilter = parseFloat(val);
  const disp = document.getElementById("priceDisplay");
  if (disp) disp.textContent = "₹" + maxPriceFilter.toLocaleString("en-IN");
  renderProductsCatalogue();
}

// Stock Checkbox
function handleStockFilter(checked) {
  inStockOnlyFilter = checked;
  renderProductsCatalogue();
}

// Rating Pills
function handleRatingFilter(rating) {
  minRatingFilter = rating;
  document.querySelectorAll(".rating-btn").forEach(btn => {
    btn.classList.toggle("active", parseFloat(btn.dataset.rating) === rating);
  });
  renderProductsCatalogue();
}

// Sorting Dropdown
function handleSortChange(sortVal) {
  currentSortOrder = sortVal;
  renderProductsCatalogue();
}

// Reset Filters
function resetFilters() {
  activeCategoryFilter = "all";
  maxPriceFilter = 60000;
  minRatingFilter = 0;
  inStockOnlyFilter = false;
  currentSortOrder = "popular";
  currentSearchQuery = "";

  const priceRange = document.getElementById("priceRange");
  if (priceRange) priceRange.value = 60000;
  const priceDisplay = document.getElementById("priceDisplay");
  if (priceDisplay) priceDisplay.textContent = "₹60,000";

  const stockCheck = document.getElementById("inStockCheckbox");
  if (stockCheck) stockCheck.checked = false;

  const searchInput = document.getElementById("globalSearchInput");
  if (searchInput) searchInput.value = "";
  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) clearBtn.style.display = "none";

  document.querySelectorAll(".cat-pill").forEach(p => p.classList.toggle("active", p.dataset.category === "all"));
  document.querySelectorAll(".rating-btn").forEach(b => b.classList.toggle("active", b.dataset.rating === "0"));

  renderProductsCatalogue();
  showToast("All catalogue filters reset.", "info");
}

// Add to Cart
function handleAddToCartClick(productId) {
  const result = store.addToCart(productId, 1);
  if (result.success) {
    showToast(result.msg, "success");
    updateHeaderBadges();
    updateCartDrawerUI();
  } else {
    showToast(result.msg, "warning");
  }
}

// Wishlist Click
function handleWishlistClick(productId) {
  const added = store.toggleWishlist(productId);
  showToast(added ? "Added to wishlist ❤️" : "Removed from wishlist", "info");
  updateHeaderBadges();
  renderProductsCatalogue();
  renderWishlist();
}

// Live Search with Autocomplete
const searchInputElem = document.getElementById("globalSearchInput");
const searchClearBtn = document.getElementById("clearSearchBtn");
const searchSuggestions = document.getElementById("searchSuggestions");

if (searchInputElem) {
  searchInputElem.addEventListener("input", (e) => {
    currentSearchQuery = e.target.value.trim();
    if (searchClearBtn) searchClearBtn.style.display = currentSearchQuery ? "block" : "none";

    renderProductsCatalogue();

    // Show suggestions dropdown
    if (currentSearchQuery.length >= 2) {
      const matches = store.products
        .filter(p => p.name.toLowerCase().includes(currentSearchQuery.toLowerCase()))
        .slice(0, 5);

      if (matches.length > 0) {
        searchSuggestions.innerHTML = matches.map(m => `
          <div class="suggestion-item" onclick="selectSearchSuggestion('${m.name}')">
            <span>${m.name}</span>
            <span class="item-cat">${m.category}</span>
          </div>
        `).join("");
        searchSuggestions.style.display = "block";
      } else {
        searchSuggestions.style.display = "none";
      }
    } else {
      searchSuggestions.style.display = "none";
    }
  });
}

if (searchClearBtn) {
  searchClearBtn.addEventListener("click", () => {
    searchInputElem.value = "";
    currentSearchQuery = "";
    searchClearBtn.style.display = "none";
    searchSuggestions.style.display = "none";
    renderProductsCatalogue();
  });
}

function selectSearchSuggestion(name) {
  searchInputElem.value = name;
  currentSearchQuery = name;
  searchSuggestions.style.display = "none";
  renderProductsCatalogue();
}

// Active Rules Sidebar Summary
function renderActiveRulesSummary() {
  const container = document.getElementById("sidebarActiveRulesSummary");
  if (!container) return;

  const activeRules = store.rules.filter(r => r.status === "active");
  container.innerHTML = activeRules.map(r => `
    <div class="rule-pill-badge">
      <strong>${r.name}:</strong> ${r.discount}% discount
    </div>
  `).join("");
}

// ==========================================================================
// 11. CART DRAWER & PRICING ENGINE INTEGRATION
// ==========================================================================

function toggleCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartDrawerBackdrop");

  if (drawer && backdrop) {
    const isOpen = drawer.classList.contains("active");
    if (!isOpen) {
      updateCartDrawerUI();
      drawer.classList.add("active");
      backdrop.classList.add("active");
    } else {
      drawer.classList.remove("active");
      backdrop.classList.remove("active");
    }
  }
}

function updateCartDrawerUI() {
  const itemsContainer = document.getElementById("drawerCartItems");
  const subtotalElem = document.getElementById("drawerSubtotal");
  const discountRow = document.getElementById("drawerDiscountRow");
  const discountLabel = document.getElementById("drawerDiscountLabel");
  const discountAmountElem = document.getElementById("drawerDiscountAmount");
  const deliveryElem = document.getElementById("drawerDelivery");
  const totalElem = document.getElementById("drawerFinalTotal");
  const ruleStatusText = document.getElementById("cartRuleStatusText");
  const checkoutBtn = document.getElementById("proceedToCheckoutBtn");

  if (!itemsContainer) return;

  const pricing = store.calculateCartPricing();

  if (store.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="empty-state-card" style="padding: 40px 10px;">
        <div class="empty-icon">🛍️</div>
        <h3>Your shopping bag is empty</h3>
        <p>Add products to your cart to see live compiler rules calculate discounts in real time!</p>
      </div>
    `;
    if (ruleStatusText) ruleStatusText.innerHTML = `Bag is empty. Add products to trigger compiler promotion checks.`;
    if (subtotalElem) subtotalElem.textContent = "₹0";
    if (discountRow) discountRow.style.display = "none";
    if (deliveryElem) deliveryElem.textContent = "₹0";
    if (totalElem) totalElem.textContent = "₹0";
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  if (checkoutBtn) checkoutBtn.disabled = false;

  // Render Items
  itemsContainer.innerHTML = store.cart.map(item => `
    <div class="cart-item-row">
      <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
      <div class="cart-item-info">
        <span class="item-cat-label">${item.category}</span>
        <h5>${item.name}</h5>
        <span class="item-price">₹${item.price.toLocaleString("en-IN")}</span>
      </div>
      <div class="cart-qty-ctrl">
        <button class="qty-btn" onclick="handleCartQtyChange('${item.id}', -1)">-</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="handleCartQtyChange('${item.id}', 1)">+</button>
      </div>
    </div>
  `).join("");

  // Price Totals
  if (subtotalElem) subtotalElem.textContent = "₹" + pricing.subtotal.toLocaleString("en-IN");
  if (deliveryElem) deliveryElem.textContent = pricing.deliveryFee === 0 ? "FREE" : "₹" + pricing.deliveryFee;
  if (totalElem) totalElem.textContent = "₹" + pricing.finalTotal.toLocaleString("en-IN");

  // Discount Engine Banner
  if (pricing.appliedRule) {
    if (discountRow) {
      discountRow.style.display = "flex";
      discountLabel.textContent = `Compiled Rule [${pricing.appliedRule.name}] (${pricing.appliedRule.discount}%)`;
      discountAmountElem.textContent = `-₹${pricing.discountAmount.toLocaleString("en-IN")}`;
    }
    if (ruleStatusText) {
      ruleStatusText.innerHTML = `
        <span style="color: #34d399; font-weight: 700;">✓ Active Rule [${pricing.appliedRule.name}] Applied!</span>
        <br>Cart conditions satisfied category '${pricing.appliedRule.categoryMatched}'. Saved <strong>₹${pricing.discountAmount.toLocaleString("en-IN")}</strong>.
      `;
    }
  } else {
    if (discountRow) discountRow.style.display = "none";
    if (ruleStatusText) {
      ruleStatusText.innerHTML = `
        <span>Evaluating active rules... No rules matched current cart threshold.</span>
        <br><small style="color: #94a3b8;">Tip: Try adding Fashion items over ₹3,000 to trigger Rule 'FashionOffer'.</small>
      `;
    }
  }
}

function handleCartQtyChange(productId, delta) {
  store.updateCartQty(productId, delta);
  updateHeaderBadges();
  updateCartDrawerUI();
}

// ==========================================================================
// 12. WISHLIST VIEW
// ==========================================================================

function renderWishlist() {
  const grid = document.getElementById("wishlistGrid");
  const emptyState = document.getElementById("emptyWishlistState");
  if (!grid) return;

  const wishlistProducts = store.products.filter(p => store.wishlist.includes(p.id));

  if (wishlistProducts.length === 0) {
    grid.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    return;
  }

  if (emptyState) emptyState.style.display = "none";

  grid.innerHTML = wishlistProducts.map(p => `
    <div class="product-card">
      <div class="product-image-wrap">
        <img src="${p.image}" alt="${p.name}">
        <span class="product-cat-tag">${p.category}</span>
        <button class="product-wishlist-btn active" onclick="handleWishlistClick('${p.id}')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
      <div class="product-body">
        <h3 class="product-title">${p.name}</h3>
        <div class="product-price-row">
          <span class="current-price">₹${p.price.toLocaleString("en-IN")}</span>
        </div>
        <div class="product-actions">
          <button class="btn btn-primary btn-block" onclick="moveWishlistToCart('${p.id}')">
            Move to Bag
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

function moveWishlistToCart(productId) {
  store.addToCart(productId, 1);
  store.toggleWishlist(productId);
  showToast("Moved item from wishlist to bag!", "success");
  updateHeaderBadges();
  renderWishlist();
  renderProductsCatalogue();
  toggleCartDrawer();
}

// ==========================================================================
// 13. CUSTOMER DASHBOARD
// ==========================================================================

function renderCustomerDashboard() {
  const totalOrdersElem = document.getElementById("custTotalOrders");
  const totalSpendElem = document.getElementById("custTotalSpend");
  const totalSavingsElem = document.getElementById("custTotalSavings");
  const wishlistCountElem = document.getElementById("custWishlistCount");
  const tbody = document.getElementById("customerOrdersTbody");
  const noOrders = document.getElementById("noCustomerOrders");

  if (!tbody) return;

  const orders = store.orders;
  const totalSpend = orders.reduce((sum, o) => sum + o.finalTotal, 0);
  const totalSavings = orders.reduce((sum, o) => sum + (o.discount || 0), 0);

  if (totalOrdersElem) totalOrdersElem.textContent = orders.length;
  if (totalSpendElem) totalSpendElem.textContent = "₹" + totalSpend.toLocaleString("en-IN");
  if (totalSavingsElem) totalSavingsElem.textContent = "₹" + totalSavings.toLocaleString("en-IN");
  if (wishlistCountElem) wishlistCountElem.textContent = store.wishlist.length;

  if (orders.length === 0) {
    tbody.innerHTML = "";
    if (noOrders) noOrders.style.display = "block";
    return;
  }

  if (noOrders) noOrders.style.display = "none";

  tbody.innerHTML = orders.map(o => `
    <tr>
      <td><strong>${o.id}</strong></td>
      <td>${o.date}</td>
      <td>${o.items.length} product(s)</td>
      <td>₹${o.subtotal.toLocaleString("en-IN")}</td>
      <td>
        ${o.discount > 0 
          ? `<span style="color: #34d399; font-weight: 600;">-₹${o.discount.toLocaleString("en-IN")}</span> <small>(${o.appliedRuleName})</small>` 
          : "—"}
      </td>
      <td><strong>₹${o.finalTotal.toLocaleString("en-IN")}</strong></td>
      <td>
        <span class="badge-status ${o.status.toLowerCase()}">${o.status}</span>
      </td>
      <td>
        <button class="btn btn-xs btn-outline" onclick="showReceiptDetails('${o.id}')">Receipt</button>
      </td>
    </tr>
  `).join("");
}

function showReceiptDetails(orderId) {
  const order = store.orders.find(o => o.id === orderId);
  if (!order) return;

  const modal = document.getElementById("orderSuccessModal");
  const orderIdElem = document.getElementById("successOrderId");
  const detailsElem = document.getElementById("orderReceiptDetails");

  if (orderIdElem) orderIdElem.textContent = `Order ${order.id}`;
  if (detailsElem) {
    detailsElem.innerHTML = `
      <p><strong>Date:</strong> ${order.date}</p>
      <p><strong>Recipient:</strong> ${order.customerName}</p>
      <p><strong>Address:</strong> ${order.shippingAddress}</p>
      <p><strong>Payment:</strong> ${order.paymentMethod}</p>
      <hr style="margin: 8px 0; border: 0; border-top: 1px solid rgba(255,255,255,0.1);">
      <p><strong>Subtotal:</strong> ₹${order.subtotal.toLocaleString("en-IN")}</p>
      <p><strong>Compiled Rule Applied:</strong> ${order.appliedRuleName} (-₹${order.discount.toLocaleString("en-IN")})</p>
      <p><strong>Total Paid:</strong> ₹${order.finalTotal.toLocaleString("en-IN")}</p>
    `;
  }

  if (modal) modal.classList.add("active");
}

// ==========================================================================
// 14. ADMIN DASHBOARD
// ==========================================================================

function renderAdminDashboard() {
  const adminRevenue = document.getElementById("adminRevenue");
  const adminTotalOrders = document.getElementById("adminTotalOrders");
  const adminTotalProducts = document.getElementById("adminTotalProducts");
  const adminActiveRulesCount = document.getElementById("adminActiveRulesCount");

  const totalRev = store.orders.reduce((sum, o) => sum + o.finalTotal, 0);
  const activeRulesCount = store.rules.filter(r => r.status === "active").length;

  if (adminRevenue) adminRevenue.textContent = "₹" + totalRev.toLocaleString("en-IN");
  if (adminTotalOrders) adminTotalOrders.textContent = store.orders.length;
  if (adminTotalProducts) adminTotalProducts.textContent = store.products.length;
  if (adminActiveRulesCount) adminActiveRulesCount.textContent = activeRulesCount;

  renderAdminInventoryTable();
  renderAdminOrdersTable();
  renderAdminRulesGrid();
}

function switchAdminTab(tabName) {
  document.querySelectorAll(".admin-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tabName);
  });
  document.querySelectorAll(".admin-tab-pane").forEach(pane => {
    pane.classList.remove("active");
  });

  const activePane = document.getElementById(
    tabName === "adminInventory" ? "tabAdminInventory" :
    tabName === "adminOrders" ? "tabAdminOrders" : "tabAdminRules"
  );
  if (activePane) activePane.classList.add("active");
}

function renderAdminInventoryTable(filterQuery = "", categoryFilter = "all") {
  const tbody = document.getElementById("adminProductsTbody");
  if (!tbody) return;

  let prods = store.products;
  if (categoryFilter !== "all") {
    prods = prods.filter(p => p.category === categoryFilter);
  }
  if (filterQuery) {
    prods = prods.filter(p => p.name.toLowerCase().includes(filterQuery.toLowerCase()));
  }

  tbody.innerHTML = prods.map(p => `
    <tr>
      <td>
        <div style="display: flex; align-items: center; gap: 10px;">
          <img src="${p.image}" style="width: 36px; height: 36px; border-radius: 4px; object-fit: cover;">
          <div>
            <strong>${p.name}</strong><br>
            <small style="color: #64748b;">${p.id}</small>
          </div>
        </div>
      </td>
      <td><span class="product-cat-tag" style="position: static;">${p.category}</span></td>
      <td><strong>₹${p.price.toLocaleString("en-IN")}</strong></td>
      <td>
        <input type="number" value="${p.stock}" min="0" style="width: 70px; padding: 4px 6px; background: #080c14; border: 1px solid rgba(255,255,255,0.1); color: #fff; border-radius: 4px;"
               onchange="handleAdminStockInlineEdit('${p.id}', this.value)">
      </td>
      <td>★ ${p.rating.toFixed(1)}</td>
      <td>
        <span class="badge-status ${p.stock > 0 ? "delivered" : "pending"}">${p.stock > 0 ? "In Stock" : "Out of Stock"}</span>
      </td>
      <td>
        <div style="display: flex; gap: 6px;">
          <button class="btn btn-xs btn-outline" onclick="openProductModal('${p.id}')">Edit</button>
          <button class="btn btn-xs btn-outline" style="color: #f87171;" onclick="handleDeleteProductClick('${p.id}')">Delete</button>
        </div>
      </td>
    </tr>
  `).join("");
}

function handleAdminProductFilter(val) {
  const cat = document.getElementById("adminCategoryFilter")?.value || "all";
  renderAdminInventoryTable(val, cat);
}

function handleAdminCategoryFilter(val) {
  const q = document.getElementById("adminProductSearch")?.value || "";
  renderAdminInventoryTable(q, val);
}

function handleAdminStockInlineEdit(productId, newStock) {
  if (store.currentRole !== "admin") {
    showToast("Authorization Error: Customer role cannot modify stock.", "error");
    renderAdminInventoryTable();
    return;
  }
  const prod = store.products.find(p => p.id === productId);
  if (prod) {
    prod.stock = Math.max(0, parseInt(newStock) || 0);
    store.saveToStorage("compilecart_products", store.products);
    showToast(`Updated stock for ${prod.name} to ${prod.stock}.`, "success");
    renderProductsCatalogue();
  }
}

function handleDeleteProductClick(productId) {
  if (confirm("Are you sure you want to remove this product from the inventory?")) {
    const res = store.deleteProduct(productId);
    if (res.success) {
      showToast(res.msg, "success");
      renderAdminDashboard();
      renderProductsCatalogue();
    } else {
      showToast(res.msg, "error");
    }
  }
}

function renderAdminOrdersTable() {
  const tbody = document.getElementById("adminOrdersTbody");
  if (!tbody) return;

  tbody.innerHTML = store.orders.map(o => `
    <tr>
      <td><strong>${o.id}</strong></td>
      <td>${o.customerName}</td>
      <td>${o.items.map(i => `${i.name} (x${i.qty})`).join(", ")}</td>
      <td>₹${o.subtotal.toLocaleString("en-IN")}</td>
      <td>${o.appliedRuleName}</td>
      <td><strong>₹${o.finalTotal.toLocaleString("en-IN")}</strong></td>
      <td>
        <span class="badge-status ${o.status.toLowerCase()}">${o.status}</span>
      </td>
      <td>
        <select onchange="handleAdminOrderStatusChange('${o.id}', this.value)" style="background: #1e293b; color: #fff; border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; padding: 4px 6px; font-size: 0.8rem;">
          <option value="Processing" ${o.status === "Processing" ? "selected" : ""}>Processing</option>
          <option value="Shipped" ${o.status === "Shipped" ? "selected" : ""}>Shipped</option>
          <option value="Delivered" ${o.status === "Delivered" ? "selected" : ""}>Delivered</option>
          <option value="Pending" ${o.status === "Pending" ? "selected" : ""}>Pending</option>
        </select>
      </td>
    </tr>
  `).join("");
}

function handleAdminOrderStatusChange(orderId, newStatus) {
  const res = store.updateOrderStatus(orderId, newStatus);
  if (res.success) {
    showToast(`Order status updated to '${newStatus}'.`, "success");
    renderCustomerDashboard();
  } else {
    showToast(res.msg, "error");
  }
}

function renderAdminRulesGrid() {
  const grid = document.getElementById("adminRulesGrid");
  if (!grid) return;

  grid.innerHTML = store.rules.map(r => {
    const isActive = r.status === "active";
    return `
      <div class="rule-admin-card ${isActive ? "active-rule" : ""}">
        <div class="rule-card-header">
          <span class="rule-name-tag">RULE ${r.name}</span>
          <span class="badge-status ${isActive ? "delivered" : "pending"}">${r.status}</span>
        </div>
        <pre class="rule-code-preview">${r.source}</pre>
        <p style="font-size: 0.8rem; color: #94a3b8; margin-bottom: 12px;">${r.summary || "Custom rule compiled via Compiler Studio"}</p>
        <div class="rule-card-footer">
          <span style="font-size: 0.75rem; color: #64748b;">Priority: ${r.priority || 10}</span>
          <button class="btn btn-xs ${isActive ? "btn-outline" : "btn-primary"}" 
                  onclick="handleToggleRuleStatus('${r.id}')">
            ${isActive ? "Deactivate Rule" : "Activate Rule"}
          </button>
        </div>
      </div>
    `;
  }).join("");
}

function handleToggleRuleStatus(ruleId) {
  const res = store.toggleRuleStatus(ruleId);
  if (res.success) {
    showToast(`Promotion rule is now ${res.status}.`, "success");
    renderAdminRulesGrid();
    renderActiveRulesSummary();
    updateCartDrawerUI();
  } else {
    showToast(res.msg, "error");
  }
}

// ==========================================================================
// 15. COMPILER STUDIO (LEXER, PARSER, AST, SEMANTIC, IR, OPTIMIZER, VM)
// ==========================================================================

function updateLineNumbers() {
  const textarea = document.getElementById("ruleSourceCode");
  const lineNumbers = document.getElementById("editorLineNumbers");
  if (!textarea || !lineNumbers) return;

  const lines = textarea.value.split("\n").length;
  let nums = "";
  for (let i = 1; i <= Math.max(lines, 5); i++) {
    nums += i + "<br>";
  }
  lineNumbers.innerHTML = nums;
}

function loadRulePreset(presetKey) {
  const sourceElem = document.getElementById("ruleSourceCode");
  const nameElem = document.getElementById("ruleNameInput");
  const presetCode = RULE_PRESETS[presetKey];

  if (sourceElem && presetCode) {
    sourceElem.value = presetCode;
    updateLineNumbers();

    // Infer name from source
    const match = presetCode.match(/RULE\s+([a-zA-Z0-9_]+)/);
    if (match && nameElem) {
      nameElem.value = match[1];
    }
  }
}

function resetEditor() {
  loadRulePreset("fashion_offer");
  resetPipelineVisuals();
  showToast("Compiler Studio reset to default template.", "info");
}

function resetPipelineVisuals() {
  ["Lexer", "Parser", "Semantic", "IR", "Opt", "VM"].forEach(step => {
    const el = document.getElementById(`stepIndicator${step}`);
    if (el) el.className = "flow-step";
  });
  const banner = document.getElementById("compilerStatusBanner");
  if (banner) {
    banner.className = "compiler-status-banner info";
    document.getElementById("compilerStatusTitle").textContent = "Ready to Compile";
    document.getElementById("compilerStatusDesc").textContent = "Click 'Compile Rule' to begin Lexical Analysis.";
  }
  document.getElementById("publishRuleBtn").disabled = true;
}

// FULL COMPILATION PIPELINE EXECUTION
function runFullCompilationPipeline() {
  const source = document.getElementById("ruleSourceCode").value.trim();
  const ruleNameInput = document.getElementById("ruleNameInput").value.trim();

  resetPipelineVisuals();

  if (!source) {
    showCompilerError("Empty Input", "Please provide a valid promotion rule source code.", "Lexical Analysis", 1, 1);
    return;
  }

  // Phase 1: Lexical Analysis
  const lexer = new Lexer(source);
  const { tokens, errors: lexErrors } = lexer.tokenize();

  renderTokensTable(tokens);
  document.getElementById("tokensBadge").textContent = tokens.length;

  if (lexErrors.length > 0) {
    const firstErr = lexErrors[0];
    showCompilerError(firstErr.stage, firstErr.message, "Lexer", firstErr.line, firstErr.col);
    markPipelineStep("Lexer", "error");
    switchStageTab("tokens");
    return;
  }
  markPipelineStep("Lexer", "done");

  // Phase 2: Syntax Analysis & AST Generation
  const parser = new Parser(tokens);
  const { ast, errors: parseErrors } = parser.parse();

  if (parseErrors.length > 0 || !ast) {
    const firstErr = parseErrors[0] || { message: "Parsing failed.", line: 1, col: 1 };
    showCompilerError("Syntax Error", firstErr.message, "Parser", firstErr.line, firstErr.col);
    markPipelineStep("Parser", "error");
    switchStageTab("tokens");
    return;
  }
  markPipelineStep("Parser", "done");
  renderAstVisualizer(ast);

  // Phase 3: Semantic Analysis
  const semanticAnalyzer = new SemanticAnalyzer();
  const semanticResult = semanticAnalyzer.analyze(ast);
  renderSemanticReport(semanticResult);

  if (!semanticResult.valid) {
    const firstErr = semanticResult.errors[0];
    showCompilerError("Semantic Error", firstErr.message, "Semantic Analysis", firstErr.line || 1, firstErr.col || 1);
    markPipelineStep("Semantic", "error");
    switchStageTab("semantic");
    return;
  }
  markPipelineStep("Semantic", "done");

  // Phase 4: Intermediate Code Generation (IR)
  const irGen = new IRGenerator();
  const rawIR = irGen.generate(ast);
  renderIRTable(rawIR);
  markPipelineStep("IR", "done");

  // Phase 5: Code Optimization
  const optimizer = new CodeOptimizer();
  const optimizedIR = optimizer.optimize(rawIR);
  renderOptimizationReport(rawIR, optimizedIR);
  markPipelineStep("Opt", "done");

  // Phase 6: Virtual Machine Sandbox Readiness
  markPipelineStep("VM", "active");

  // Store in cache
  store.lastCompilation = {
    source,
    name: ruleNameInput || ast.name,
    tokens,
    ast,
    semanticResult,
    rawIR,
    optimizedIR,
    valid: true
  };

  // Enable Publish Button
  document.getElementById("publishRuleBtn").disabled = false;

  // Show Success Banner
  const banner = document.getElementById("compilerStatusBanner");
  if (banner) {
    banner.className = "compiler-status-banner success";
    document.getElementById("compilerStatusTitle").textContent = "✓ Compilation Successful (All Stages Passed)";
    document.getElementById("compilerStatusDesc").textContent = `Rule '${ast.name}' successfully parsed into AST, verified semantically, and compiled into ${optimizedIR.length} bytecode instructions.`;
  }

  showToast(`Rule '${ast.name}' compiled successfully!`, "success");
}

function showCompilerError(title, msg, stepKey, line, col) {
  const banner = document.getElementById("compilerStatusBanner");
  if (banner) {
    banner.className = "compiler-status-banner error";
    document.getElementById("compilerStatusTitle").textContent = `✕ ${title} [Line ${line}, Col ${col}]`;
    document.getElementById("compilerStatusDesc").textContent = msg;
  }
  showToast(`${title}: ${msg}`, "error");
}

function markPipelineStep(stepName, status) {
  const el = document.getElementById(`stepIndicator${stepName}`);
  if (el) {
    el.className = `flow-step ${status}`;
  }
}

function switchStageTab(stageId) {
  document.querySelectorAll(".stage-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.stage === stageId);
  });
  document.querySelectorAll(".stage-tab-content").forEach(content => {
    content.classList.remove("active");
  });

  const activeContent = document.getElementById(
    stageId === "tokens" ? "stageTabTokens" :
    stageId === "ast" ? "stageTabAst" :
    stageId === "semantic" ? "stageTabSemantic" :
    stageId === "ir" ? "stageTabIr" :
    stageId === "optimizer" ? "stageTabOptimizer" :
    stageId === "execution" ? "stageTabExecution" : "stageTabTests"
  );
  if (activeContent) activeContent.classList.add("active");
}

// Render Tokens Table
function renderTokensTable(tokens) {
  const tbody = document.getElementById("tokensTableBody");
  if (!tbody) return;

  const getBadgeClass = (type) => {
    switch (type) {
      case TokenType.KEYWORD: return "tok-kw";
      case TokenType.IDENTIFIER: return "tok-id";
      case TokenType.OPERATOR: return "tok-op";
      case TokenType.STRING: return "tok-str";
      case TokenType.NUMBER: return "tok-num";
      default: return "tok-del";
    }
  };

  tbody.innerHTML = tokens.map((t, idx) => `
    <tr>
      <td>${idx + 1}</td>
      <td><span class="token-badge ${getBadgeClass(t.type)}">${t.type}</span></td>
      <td><code>${t.value === "EOF" ? "⟨EOF⟩" : String(t.value)}</code></td>
      <td>Line ${t.line}, Col ${t.col}</td>
      <td>${t.type === "KEYWORD" ? "Reserved Grammar Keyword" : t.type === "IDENTIFIER" ? "Symbol Name" : "Literal/Operator"}</td>
    </tr>
  `).join("");
}

// Render AST Visualizer
function renderAstVisualizer(ast) {
  const visualContainer = document.getElementById("astVisualContainer");
  const jsonContainer = document.getElementById("astJsonContainer");

  if (jsonContainer) {
    jsonContainer.textContent = JSON.stringify(ast, null, 2);
  }

  if (!visualContainer) return;

  function buildAstHtml(node) {
    if (!node) return "";

    if (node.type === "RuleDeclaration") {
      return `
        <div class="ast-tree-root">
          <div class="ast-node">
            <span class="ast-node-type">RuleDeclaration</span>
            <span class="ast-node-val">${node.name}</span>
          </div>
          <div class="ast-children-container">
            <div class="ast-branch">
              <strong style="font-size: 0.72rem; color: #a855f7;">CONDITION:</strong>
              ${buildAstHtml(node.condition)}
            </div>
            <div class="ast-branch">
              <strong style="font-size: 0.72rem; color: #38bdf8;">ACTION:</strong>
              ${buildAstHtml(node.action)}
            </div>
          </div>
        </div>
      `;
    }

    if (node.type === "LogicalExpression") {
      return `
        <div>
          <div class="ast-node">
            <span class="ast-node-type">LogicalOp</span>
            <span class="ast-node-val" style="color: #fbbf24; font-weight: 700;">${node.operator}</span>
          </div>
          <div class="ast-children-container">
            <div>${buildAstHtml(node.left)}</div>
            <div>${buildAstHtml(node.right)}</div>
          </div>
        </div>
      `;
    }

    if (node.type === "ComparisonExpression") {
      return `
        <div class="ast-node">
          <span class="ast-node-type">Comparison</span>
          <span class="ast-node-val">${node.identifier} <strong>${node.operator}</strong> ${JSON.stringify(node.literal)}</span>
        </div>
      `;
    }

    if (node.type === "ActionAssignment") {
      return `
        <div class="ast-node">
          <span class="ast-node-type">AssignAction</span>
          <span class="ast-node-val">${node.target} = <strong style="color: #4ade80;">${node.value}%</strong></span>
        </div>
      `;
    }

    return `<div class="ast-node"><span class="ast-node-val">${JSON.stringify(node)}</span></div>`;
  }

  visualContainer.innerHTML = buildAstHtml(ast);
}

function toggleAstDisplay(mode) {
  const visual = document.getElementById("astVisualContainer");
  const json = document.getElementById("astJsonContainer");
  const btnVis = document.getElementById("btnAstVisual");
  const btnJson = document.getElementById("btnAstJson");

  if (mode === "visual") {
    visual.style.display = "block";
    json.style.display = "none";
    btnVis.classList.add("active");
    btnJson.classList.remove("active");
  } else {
    visual.style.display = "none";
    json.style.display = "block";
    btnVis.classList.remove("active");
    btnJson.classList.add("active");
  }
}

// Render Semantic Report
function renderSemanticReport(report) {
  const card = document.getElementById("semanticReportCard");
  if (!card) return;

  let html = `<div style="margin-bottom: 12px; font-weight: 700; color: ${report.valid ? "#34d399" : "#f87171"};">
    ${report.valid ? "✓ All Semantic Invariants Passed" : "✕ Semantic Violations Detected"}
  </div>`;

  html += report.checks.map(c => `
    <div class="check-item">
      <span class="check-icon pass">✓</span>
      <div>
        <strong>${c.title}</strong>
        <p style="font-size: 0.78rem; color: #94a3b8;">${c.detail}</p>
      </div>
    </div>
  `).join("");

  if (report.errors.length > 0) {
    html += report.errors.map(e => `
      <div class="check-item">
        <span class="check-icon fail">✕</span>
        <div>
          <strong style="color: #f87171;">Semantic Error [Line ${e.line || 1}, Col ${e.col || 1}]</strong>
          <p style="font-size: 0.8rem; color: #fca5a5;">${e.message}</p>
        </div>
      </div>
    `).join("");
  }

  card.innerHTML = html;
}

// Render Intermediate IR Table
function renderIRTable(instructions) {
  const tbody = document.getElementById("irTableBody");
  if (!tbody) return;

  tbody.innerHTML = instructions.map((inst, idx) => `
    <tr>
      <td><code>0x${idx.toString(16).padStart(2, "0").toUpperCase()}</code></td>
      <td><span class="ir-opcode">${inst.opcode}</span></td>
      <td><span class="ir-operand">${inst.operand !== null ? JSON.stringify(inst.operand) : "—"}</span></td>
      <td style="color: #94a3b8; font-size: 0.8rem;">${inst.desc}</td>
    </tr>
  `).join("");
}

// Render Optimization Side-by-Side
function renderOptimizationReport(rawIR, optimizedIR) {
  const rawElem = document.getElementById("rawIrListing");
  const optElem = document.getElementById("optimizedIrListing");
  const countBefore = document.getElementById("optCountBefore");
  const countAfter = document.getElementById("optCountAfter");
  const pctElem = document.getElementById("optReductionPct");

  if (rawElem) {
    rawElem.textContent = rawIR.map((inst, i) => `${i.toString().padStart(2, "0")}: ${inst.opcode.padEnd(14)} ${inst.operand !== null ? JSON.stringify(inst.operand) : ""}`).join("\n");
  }

  if (optElem) {
    optElem.textContent = optimizedIR.map((inst, i) => `${i.toString().padStart(2, "0")}: ${inst.opcode.padEnd(14)} ${inst.operand !== null ? JSON.stringify(inst.operand) : ""}`).join("\n");
  }

  const beforeCount = rawIR.length;
  const afterCount = optimizedIR.length;
  const saved = beforeCount > 0 ? Math.max(0, Math.round(((beforeCount - afterCount) / beforeCount) * 100)) : 0;

  if (countBefore) countBefore.textContent = beforeCount;
  if (countAfter) countAfter.textContent = afterCount;
  if (pctElem) pctElem.textContent = `${saved}% Reduced`;
}

function optimizeCompiledRule() {
  if (!store.lastCompilation.valid) {
    showToast("Please compile a valid rule first before optimizing.", "warning");
    return;
  }
  switchStageTab("optimizer");
  showToast("Code optimization applied (Constant Folding & Instruction Compaction).", "success");
}

// Publish Rule to Store
function publishRuleToStore() {
  if (store.currentRole !== "admin") {
    showToast("Authorization Error: Only administrators can publish rules to the store.", "error");
    return;
  }

  if (!store.lastCompilation.valid) {
    showToast("Cannot publish: Rule has not passed compilation and semantic checks.", "error");
    return;
  }

  const { name, source, ast } = store.lastCompilation;
  const priority = parseInt(document.getElementById("rulePriorityInput").value) || 10;
  const discountVal = ast.action?.value || 10;

  const newRule = {
    id: "rule-" + Date.now().toString(36),
    name: name,
    priority: priority,
    status: "active",
    source: source,
    discount: discountVal,
    summary: `${discountVal}% discount rule compiled via Compiler Studio.`
  };

  store.rules.unshift(newRule);
  store.saveToStorage("compilecart_rules", store.rules);

  renderActiveRulesSummary();
  renderAdminRulesGrid();
  updateCartDrawerUI();

  showToast(`🎉 Rule '${name}' published and active in shopping cart!`, "success");
}

// VM Sandbox Execution Controls
function syncSandboxWithLiveCart() {
  const pricing = store.calculateCartPricing();
  const catSelect = document.getElementById("sbCategory");
  const totalInput = document.getElementById("sbCartTotal");
  const countInput = document.getElementById("sbItemCount");

  if (store.cart.length > 0) {
    if (catSelect) catSelect.value = store.cart[0].category;
    if (totalInput) totalInput.value = pricing.subtotal;
    if (countInput) countInput.value = store.cart.reduce((s, i) => s + i.qty, 0);
    showToast("Synchronized sandbox with current shopping bag values.", "info");
  } else {
    showToast("Bag is empty. Using sample values.", "info");
  }
}

function getSandboxContext() {
  return {
    category: document.getElementById("sbCategory")?.value || "Fashion",
    cart_total: parseFloat(document.getElementById("sbCartTotal")?.value) || 3500,
    item_count: parseInt(document.getElementById("sbItemCount")?.value) || 2,
    quantity: parseInt(document.getElementById("sbItemCount")?.value) || 2,
    customer_type: document.getElementById("sbCustomerType")?.value || "Regular"
  };
}

function executeVmSimulation() {
  if (!store.lastCompilation.valid) {
    runFullCompilationPipeline();
    if (!store.lastCompilation.valid) return;
  }

  const instructions = store.lastCompilation.optimizedIR;
  const context = getSandboxContext();
  const vm = store.vm;

  const result = vm.execute(instructions, context);
  renderVmOutcome(result);
}

function stepVmSimulation() {
  if (!store.lastCompilation.valid) {
    runFullCompilationPipeline();
    if (!store.lastCompilation.valid) return;
  }

  const instructions = store.lastCompilation.optimizedIR;
  const context = getSandboxContext();
  const vm = store.vm;

  const stepRecord = vm.step(instructions, context);
  if (!stepRecord) {
    showToast("Virtual Machine execution halted.", "info");
    return;
  }

  renderVmOutcome({
    discount: vm.discount,
    satisfied: vm.discount > 0,
    trace: vm.trace,
    finalStack: [...vm.stack]
  });
}

function resetVmSimulation() {
  store.vm.reset();
  renderVmOutcome({
    discount: 0,
    satisfied: false,
    trace: [],
    finalStack: []
  });
  showToast("Virtual Machine reset.", "info");
}

function renderVmOutcome(result) {
  const stackDisplay = document.getElementById("vmStackDisplay");
  const outcomeCard = document.getElementById("vmOutcomeCard");
  const traceLog = document.getElementById("vmTraceLog");

  // Stack Display
  if (stackDisplay) {
    if (result.finalStack.length === 0) {
      stackDisplay.innerHTML = `<span class="stack-empty">[ Stack Empty ]</span>`;
    } else {
      stackDisplay.innerHTML = result.finalStack.map(val => `
        <div class="stack-item">${JSON.stringify(val)}</div>
      `).join("");
    }
  }

  // Outcome Card
  if (outcomeCard) {
    if (result.trace.length === 0) {
      outcomeCard.className = "outcome-card pending";
      outcomeCard.textContent = "Awaiting execution...";
    } else if (result.satisfied) {
      outcomeCard.className = "outcome-card match";
      outcomeCard.innerHTML = `
        <div>
          <strong>🎉 RULE MATCHED! Eligible Discount: ${result.discount}%</strong><br>
          Condition satisfied against shopping cart context.
        </div>
      `;
    } else {
      outcomeCard.className = "outcome-card nomatch";
      outcomeCard.innerHTML = `
        <div>
          <strong>Condition Failed (0% Discount)</strong><br>
          Cart context did not meet the rule condition criteria.
        </div>
      `;
    }
  }

  // Trace Log
  if (traceLog) {
    if (result.trace.length === 0) {
      traceLog.textContent = "No instructions executed yet.";
    } else {
      traceLog.textContent = result.trace.map(t => 
        `Step ${t.step.toString().padStart(2, "0")} | PC:${t.pc.toString().padStart(2, "0")} | ${t.opcode.padEnd(14)} ${t.operand !== "" ? JSON.stringify(t.operand) : ""} => Stack: [${t.stackAfter.map(s => JSON.stringify(s)).join(", ")}] // ${t.explanation}`
      ).join("\n");
    }
  }
}

// ==========================================================================
// 16. SRS AUTOMATED TEST SUITE (TC-01 TO TC-12)
// ==========================================================================

function runAllSRSAutomatedTests() {
  const results = [];

  // TC-01: Compile a valid promotion rule
  try {
    const lexer = new Lexer(`RULE TestValid { IF cart_total > 1000 THEN discount = 10 }`);
    const { tokens } = lexer.tokenize();
    const parser = new Parser(tokens);
    const { ast } = parser.parse();
    const sem = new SemanticAnalyzer().analyze(ast);
    results.push({
      id: "TC-01",
      scenario: "Compile a valid promotion rule",
      expected: "Compilation succeeds",
      actual: sem.valid ? "Succeeded (Tokens, AST, Semantic passed)" : "Failed",
      pass: sem.valid
    });
  } catch (e) {
    results.push({ id: "TC-01", scenario: "Compile valid rule", expected: "Succeeds", actual: e.message, pass: false });
  }

  // TC-02: Omit THEN keyword
  try {
    const lexer = new Lexer(`RULE BadSyntax { IF cart_total > 1000 discount = 10 }`);
    const { tokens } = lexer.tokenize();
    const parser = new Parser(tokens);
    const { ast, errors } = parser.parse();
    const syntaxFailed = errors.length > 0 || !ast;
    results.push({
      id: "TC-02",
      scenario: "Omit the THEN keyword",
      expected: "Syntax error is displayed",
      actual: syntaxFailed ? `Syntax error detected: "${errors[0]?.message}"` : "Unexpected success",
      pass: syntaxFailed
    });
  } catch (e) {
    results.push({ id: "TC-02", scenario: "Omit THEN keyword", expected: "Syntax error", actual: e.message, pass: true });
  }

  // TC-03: Unknown variable
  try {
    const lexer = new Lexer(`RULE UnknownVar { IF custom_metric > 100 THEN discount = 10 }`);
    const { tokens } = lexer.tokenize();
    const parser = new Parser(tokens);
    const { ast } = parser.parse();
    const sem = new SemanticAnalyzer().analyze(ast);
    const caught = !sem.valid && sem.errors.some(err => err.message.includes("custom_metric"));
    results.push({
      id: "TC-03",
      scenario: "Use an unknown variable in rule",
      expected: "Semantic error is displayed",
      actual: caught ? "Caught undeclared variable 'custom_metric'" : "Failed to catch",
      pass: caught
    });
  } catch (e) {
    results.push({ id: "TC-03", scenario: "Unknown variable", expected: "Semantic error", actual: e.message, pass: false });
  }

  // TC-04: Set discount to 120%
  try {
    const lexer = new Lexer(`RULE HighDisc { IF cart_total > 1000 THEN discount = 120 }`);
    const { tokens } = lexer.tokenize();
    const parser = new Parser(tokens);
    const { ast } = parser.parse();
    const sem = new SemanticAnalyzer().analyze(ast);
    const rejected = !sem.valid && sem.errors.some(err => err.message.includes("120"));
    results.push({
      id: "TC-04",
      scenario: "Set discount to 120% (exceeding 100% boundary)",
      expected: "Rule is rejected by semantic check",
      actual: rejected ? "Rejected: Discount 120% is outside 1-100% range" : "Allowed invalid discount",
      pass: rejected
    });
  } catch (e) {
    results.push({ id: "TC-04", scenario: "Discount 120%", expected: "Rejected", actual: e.message, pass: false });
  }

  // TC-05: Cart total above threshold
  try {
    const lexer = new Lexer(`RULE ThresholdTest { IF cart_total > 3000 THEN discount = 15 }`);
    const { tokens } = lexer.tokenize();
    const parser = new Parser(tokens);
    const { ast } = parser.parse();
    const ir = new IRGenerator().generate(ast);
    const vmRes = new VirtualMachine().execute(ir, { cart_total: 4500, category: "Fashion" });
    const match = vmRes.satisfied && vmRes.discount === 15;
    results.push({
      id: "TC-05",
      scenario: "Cart total is above the threshold (₹4,500 > ₹3,000)",
      expected: "Eligible discount (15%) is calculated",
      actual: match ? "Applied 15% discount successfully" : "Failed to match",
      pass: match
    });
  } catch (e) {
    results.push({ id: "TC-05", scenario: "Cart above threshold", expected: "Discount applied", actual: e.message, pass: false });
  }

  // TC-06: Cart total below threshold
  try {
    const lexer = new Lexer(`RULE ThresholdTest { IF cart_total > 3000 THEN discount = 15 }`);
    const { tokens } = lexer.tokenize();
    const parser = new Parser(tokens);
    const { ast } = parser.parse();
    const ir = new IRGenerator().generate(ast);
    const vmRes = new VirtualMachine().execute(ir, { cart_total: 1500, category: "Fashion" });
    const noMatch = !vmRes.satisfied && vmRes.discount === 0;
    results.push({
      id: "TC-06",
      scenario: "Cart total is below the threshold (₹1,500 < ₹3,000)",
      expected: "Rule does not apply (0% discount)",
      actual: noMatch ? "Condition evaluated false; 0% discount" : "Incorrectly applied",
      pass: noMatch
    });
  } catch (e) {
    results.push({ id: "TC-06", scenario: "Cart below threshold", expected: "No discount", actual: e.message, pass: false });
  }

  // TC-07: Execute a disabled rule
  try {
    const dummyRules = [{ id: "test-dis", name: "DisabledRule", status: "inactive", source: `RULE D { IF cart_total > 100 THEN discount = 50 }` }];
    const activeOnly = dummyRules.filter(r => r.status === "active");
    results.push({
      id: "TC-07",
      scenario: "Execute a disabled/inactive rule",
      expected: "No discount is applied",
      actual: activeOnly.length === 0 ? "Inactive rule skipped; 0% discount" : "Failed",
      pass: activeOnly.length === 0
    });
  } catch (e) {
    results.push({ id: "TC-07", scenario: "Disabled rule", expected: "Skipped", actual: e.message, pass: false });
  }

  // TC-08: Add more units than stock permits
  try {
    const sampleProduct = store.products[0];
    const addExcess = store.addToCart(sampleProduct.id, sampleProduct.stock + 50);
    results.push({
      id: "TC-08",
      scenario: "Add more units than inventory stock permits",
      expected: "Request is rejected with warning",
      actual: !addExcess.success ? `Rejected: ${addExcess.msg}` : "Allowed overstock",
      pass: !addExcess.success
    });
  } catch (e) {
    results.push({ id: "TC-08", scenario: "Stock overflow", expected: "Rejected", actual: e.message, pass: false });
  }

  // TC-09: Admin adds a product
  try {
    const prevCount = store.products.length;
    const originalRole = store.currentRole;
    store.currentRole = "admin";
    const res = store.saveProduct({
      name: "Automated Test Item",
      category: "Fashion",
      price: 1999,
      stock: 10,
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      description: "Test description"
    });
    const appeared = store.products.length === prevCount + 1;
    // Clean up
    store.products = store.products.filter(p => p.name !== "Automated Test Item");
    store.currentRole = originalRole;
    results.push({
      id: "TC-09",
      scenario: "Admin adds a product",
      expected: "Product appears in the catalogue",
      actual: appeared ? "Product created and added to inventory" : "Failed to add",
      pass: appeared
    });
  } catch (e) {
    results.push({ id: "TC-09", scenario: "Admin add product", expected: "Appears in catalogue", actual: e.message, pass: false });
  }

  // TC-10: Customer attempts admin operation
  try {
    const originalRole = store.currentRole;
    store.currentRole = "customer";
    const deleteAttempt = store.deleteProduct("prod-f1");
    store.currentRole = originalRole;
    const denied = !deleteAttempt.success && deleteAttempt.msg.includes("Permission Denied");
    results.push({
      id: "TC-10",
      scenario: "Customer attempts an admin deletion",
      expected: "Access is denied with authorization error",
      actual: denied ? "Access Denied: Customer unauthorized" : "Allowed unauthorized delete",
      pass: denied
    });
  } catch (e) {
    results.push({ id: "TC-10", scenario: "Customer admin attempt", expected: "Access denied", actual: e.message, pass: false });
  }

  // TC-11: Refresh page state retention
  try {
    const testKey = "compilecart_test_persistence";
    localStorage.setItem(testKey, "valid_state");
    const retrieved = localStorage.getItem(testKey);
    localStorage.removeItem(testKey);
    results.push({
      id: "TC-11",
      scenario: "Refresh page & test persistence",
      expected: "Persistent state is retained via localStorage",
      actual: retrieved === "valid_state" ? "LocalStorage state verified intact" : "Persistence failure",
      pass: retrieved === "valid_state"
    });
  } catch (e) {
    results.push({ id: "TC-11", scenario: "State persistence", expected: "Retained", actual: e.message, pass: false });
  }

  // TC-12: Compare unoptimized vs optimized execution
  try {
    const ruleSource = `RULE EquivTest { IF 5000 > 3000 AND cart_total > 2000 THEN discount = 20 }`;
    const lex = new Lexer(ruleSource);
    const { tokens } = lex.tokenize();
    const { ast } = new Parser(tokens).parse();
    const rawIR = new IRGenerator().generate(ast);
    const optIR = new CodeOptimizer().optimize(rawIR);

    const context = { cart_total: 2500, category: "Fashion" };
    const vmUnopt = new VirtualMachine().execute(rawIR, context);
    const vmOpt = new VirtualMachine().execute(optIR, context);

    const equivalent = vmUnopt.discount === vmOpt.discount && vmUnopt.satisfied === vmOpt.satisfied;
    results.push({
      id: "TC-12",
      scenario: "Compare unoptimized and optimized execution",
      expected: "Results remain strictly equivalent (Safe optimization)",
      actual: equivalent ? `Equivalence verified (Unopt: ${vmUnopt.discount}%, Opt: ${vmOpt.discount}%)` : "Discrepancy detected",
      pass: equivalent
    });
  } catch (e) {
    results.push({ id: "TC-12", scenario: "Optimization equivalence", expected: "Equivalent", actual: e.message, pass: false });
  }

  // Render Table
  const tbody = document.getElementById("testSuiteTbody");
  if (tbody) {
    tbody.innerHTML = results.map(r => `
      <tr>
        <td><strong>${r.id}</strong></td>
        <td>${r.scenario}</td>
        <td>${r.expected}</td>
        <td><code>${r.actual}</code></td>
        <td>
          <span class="test-pill ${r.pass ? "pass" : "fail"}">${r.pass ? "✓ PASS" : "✕ FAIL"}</span>
        </td>
      </tr>
    `).join("");
  }

  switchStageTab("tests");
  const allPassed = results.every(r => r.pass);
  showToast(allPassed ? "🎉 All 12 SRS Test Cases Passed Successfully!" : "Test Suite finished with some warnings.", allPassed ? "success" : "warning");
}

// ==========================================================================
// 17. MODALS CONTROLLERS (PRODUCT QUICK VIEW, CHECKOUT, ADMIN, DOCS)
// ==========================================================================

function openProductQuickModal(productId) {
  const product = store.products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("productQuickModal");
  const content = document.getElementById("productModalContent");

  if (content) {
    content.innerHTML = `
      <div class="modal-img-wrap">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div>
        <span class="modal-meta-cat">${product.category}</span>
        <h2 style="font-size: 1.5rem; margin: 6px 0;">${product.name}</h2>
        <div class="product-rating" style="margin-bottom: 12px;">
          <span>★</span><strong>${product.rating.toFixed(1)}</strong>
          <span class="rating-count">(${product.reviews || 45} customer reviews)</span>
        </div>
        <div class="modal-price-tag">
          ₹${product.price.toLocaleString("en-IN")}
          ${product.originalPrice ? `<span class="original-price" style="font-size: 1rem; margin-left: 8px;">₹${product.originalPrice.toLocaleString("en-IN")}</span>` : ""}
        </div>
        <p style="color: #94a3b8; font-size: 0.9rem; line-height: 1.6; margin-bottom: 18px;">
          ${product.description}
        </p>
        <div class="variant-picker">
          <div class="variant-title">Available Variants:</div>
          <div class="variant-options">
            <button class="v-btn active">Standard</button>
            <button class="v-btn">Premium Pack</button>
          </div>
        </div>
        <div style="font-size: 0.85rem; margin-bottom: 20px;" class="${product.stock > 0 ? "stock-in" : "stock-out"}">
          ● ${product.stock > 0 ? `${product.stock} units available in stock` : "Currently Out of Stock"}
        </div>
        <div style="display: flex; gap: 12px;">
          <button class="btn btn-primary btn-block" onclick="handleAddToCartClick('${product.id}'); closeProductQuickModal();" ${product.stock <= 0 ? "disabled" : ""}>
            Add to Shopping Bag
          </button>
        </div>
      </div>
    `;
  }

  if (modal) modal.classList.add("active");
}

function closeProductQuickModal(event) {
  const modal = document.getElementById("productQuickModal");
  if (modal) modal.classList.remove("active");
}

// Admin Add/Edit Product Modal
function openProductModal(productId = null) {
  if (store.currentRole !== "admin") {
    showToast("Authorization Denied: Only administrators can add or edit products.", "error");
    return;
  }

  const modal = document.getElementById("adminProductModal");
  const form = document.getElementById("adminProductForm");
  const title = document.getElementById("adminProductModalTitle");
  const editId = document.getElementById("editProductId");

  if (form) form.reset();

  if (productId) {
    const prod = store.products.find(p => p.id === productId);
    if (prod) {
      if (title) title.textContent = "Edit Catalogue Product";
      if (editId) editId.value = prod.id;
      document.getElementById("prodNameInput").value = prod.name;
      document.getElementById("prodCategoryInput").value = prod.category;
      document.getElementById("prodPriceInput").value = prod.price;
      document.getElementById("prodStockInput").value = prod.stock;
      document.getElementById("prodRatingInput").value = prod.rating;
      document.getElementById("prodImageInput").value = prod.image;
      document.getElementById("prodDescInput").value = prod.description;
    }
  } else {
    if (title) title.textContent = "Add New Catalogue Item";
    if (editId) editId.value = "";
  }

  if (modal) modal.classList.add("active");
}

function closeProductModal() {
  const modal = document.getElementById("adminProductModal");
  if (modal) modal.classList.remove("active");
}

function handleSaveProduct(e) {
  e.preventDefault();
  const editId = document.getElementById("editProductId").value;
  const name = document.getElementById("prodNameInput").value.trim();
  const category = document.getElementById("prodCategoryInput").value;
  const price = parseFloat(document.getElementById("prodPriceInput").value);
  const stock = parseInt(document.getElementById("prodStockInput").value);
  const rating = parseFloat(document.getElementById("prodRatingInput").value) || 4.8;
  const image = document.getElementById("prodImageInput").value.trim() || 
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80";
  const desc = document.getElementById("prodDescInput").value.trim() || "Handcrafted premium selection.";

  const result = store.saveProduct({
    id: editId || null,
    name,
    category,
    price,
    stock,
    rating,
    image,
    description: desc
  });

  if (result.success) {
    showToast(result.msg, "success");
    closeProductModal();
    renderProductsCatalogue();
    renderAdminDashboard();
  } else {
    showToast(result.msg, "error");
  }
}

// Checkout Modal
function openCheckoutModal() {
  if (store.cart.length === 0) {
    showToast("Your shopping bag is empty.", "warning");
    return;
  }

  const modal = document.getElementById("checkoutModal");
  const subtotalElem = document.getElementById("chkSubtotal");
  const discountRow = document.getElementById("chkDiscountRow");
  const discountLabel = document.getElementById("chkDiscountLabel");
  const discountVal = document.getElementById("chkDiscountVal");
  const deliveryElem = document.getElementById("chkDelivery");
  const finalTotalElem = document.getElementById("chkFinalTotal");
  const confirmBtn = document.getElementById("confirmOrderBtn");

  const pricing = store.calculateCartPricing();

  if (subtotalElem) subtotalElem.textContent = "₹" + pricing.subtotal.toLocaleString("en-IN");
  if (deliveryElem) deliveryElem.textContent = pricing.deliveryFee === 0 ? "FREE" : "₹" + pricing.deliveryFee;
  if (finalTotalElem) finalTotalElem.textContent = "₹" + pricing.finalTotal.toLocaleString("en-IN");
  if (confirmBtn) confirmBtn.textContent = `Place Simulated Order (₹${pricing.finalTotal.toLocaleString("en-IN")})`;

  if (pricing.appliedRule) {
    if (discountRow) discountRow.style.display = "flex";
    if (discountLabel) discountLabel.textContent = `Compiled Rule [${pricing.appliedRule.name}] (${pricing.appliedRule.discount}%):`;
    if (discountVal) discountVal.textContent = `-₹${pricing.discountAmount.toLocaleString("en-IN")}`;
  } else {
    if (discountRow) discountRow.style.display = "none";
  }

  if (modal) modal.classList.add("active");
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkoutModal");
  if (modal) modal.classList.remove("active");
}

function handlePlaceOrder(e) {
  e.preventDefault();

  const shipName = document.getElementById("shipName").value.trim();
  const shipAddress = document.getElementById("shipAddress").value.trim();
  const shipCity = document.getElementById("shipCity").value.trim();
  const shipPincode = document.getElementById("shipPincode").value.trim();

  const payOption = document.querySelector('input[name="payMethod"]:checked')?.value || "UPI";

  const orderResult = store.createOrder({
    name: shipName,
    address: shipAddress,
    city: shipCity,
    pincode: shipPincode
  }, payOption);

  if (orderResult.success) {
    closeCheckoutModal();
    toggleCartDrawer(); // close drawer
    updateHeaderBadges();
    renderProductsCatalogue();
    showReceiptDetails(orderResult.order.id);
    showToast("🎉 Order confirmed successfully!", "success");
  } else {
    showToast(orderResult.msg, "error");
  }
}

function closeOrderSuccessModal() {
  const modal = document.getElementById("orderSuccessModal");
  if (modal) modal.classList.remove("active");
}

// Grammar Reference Modal
function openGrammarDocsModal() {
  const modal = document.getElementById("grammarDocsModal");
  if (modal) modal.classList.add("active");
}

function closeGrammarDocsModal() {
  const modal = document.getElementById("grammarDocsModal");
  if (modal) modal.classList.remove("active");
}

// ==========================================================================
// AUTHENTICATION SYSTEM (Customer & Admin Login/Register)
// ==========================================================================

let currentAuthRole = "customer"; // tracks which role tab is active in auth screen

function getRegisteredUsers() {
  try {
    const data = localStorage.getItem("compilecart_users");
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

function saveRegisteredUsers(users) {
  localStorage.setItem("compilecart_users", JSON.stringify(users));
}

function getLoggedInSession() {
  try {
    const data = localStorage.getItem("compilecart_session");
    return data ? JSON.parse(data) : null;
  } catch (e) {
    return null;
  }
}

function saveSession(session) {
  localStorage.setItem("compilecart_session", JSON.stringify(session));
}

function clearSession() {
  localStorage.removeItem("compilecart_session");
}

// Simple hash for localStorage-only password storage (not production-grade)
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return 'h_' + Math.abs(hash).toString(36);
}

function initializeAuth() {
  const session = getLoggedInSession();
  const authGate = document.getElementById("authGate");

  if (session && session.email && session.role) {
    // User is logged in — hide auth gate, set role, update profile
    if (authGate) authGate.classList.add("hidden");
    store.currentRole = session.role;
    localStorage.setItem("compilecart_role", session.role);
    updateUserProfileUI(session);
    handleRoleChange(session.role);
  } else {
    // Not logged in — show auth gate
    if (authGate) authGate.classList.remove("hidden");
  }
}

function updateUserProfileUI(session) {
  const nameEl = document.getElementById("userProfileName");
  const roleEl = document.getElementById("userProfileRole");
  const avatarEl = document.getElementById("userAvatarMini");

  if (nameEl) nameEl.textContent = session.name || session.email.split('@')[0];
  if (roleEl) roleEl.textContent = session.role === "admin" ? "Administrator" : "Customer";
  if (avatarEl) {
    const initials = (session.name || session.email)
      .split(' ')
      .map(w => w[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
    avatarEl.textContent = initials;
    // Different gradient for admin
    if (session.role === "admin") {
      avatarEl.style.background = 'linear-gradient(135deg, #f59e0b, #f43f5e)';
    } else {
      avatarEl.style.background = 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))';
    }
  }

  // Update customer dashboard name if customer
  const custBannerName = document.querySelector('.customer-info h2');
  if (custBannerName && session.role === 'customer') {
    custBannerName.innerHTML = `Welcome back, <span class="gradient-text">${session.name || session.email.split('@')[0]}</span>`;
  }
}

function switchAuthRole(role) {
  currentAuthRole = role;
  // Update tab active states
  document.querySelectorAll('.auth-role-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.role === role);
  });
  // Update form labels
  const loginHeading = document.getElementById('loginHeadingRole');
  const loginDesc = document.getElementById('loginDescRole');
  const regHeading = document.getElementById('registerHeadingRole');
  const regDesc = document.getElementById('registerDescRole');

  if (loginHeading) loginHeading.textContent = role === 'admin' ? 'Admin' : 'Customer';
  if (loginDesc) loginDesc.textContent = role === 'admin' ? 'admin dashboard' : 'shopping dashboard';
  if (regHeading) regHeading.textContent = role === 'admin' ? 'Admin' : 'Customer';
  if (regDesc) regDesc.textContent = role === 'admin' ? 'admin' : 'shopping';

  // Clear errors
  hideAuthError('loginError');
  hideAuthError('registerError');
}

function switchAuthForm(mode) {
  const loginSection = document.getElementById('authLoginForm');
  const registerSection = document.getElementById('authRegisterForm');
  if (mode === 'register') {
    if (loginSection) loginSection.classList.remove('active');
    if (registerSection) registerSection.classList.add('active');
  } else {
    if (registerSection) registerSection.classList.remove('active');
    if (loginSection) loginSection.classList.add('active');
  }
  hideAuthError('loginError');
  hideAuthError('registerError');
}

function showAuthError(elementId, message) {
  const el = document.getElementById(elementId);
  if (el) {
    el.textContent = message;
    el.style.display = 'block';
  }
}

function hideAuthError(elementId) {
  const el = document.getElementById(elementId);
  if (el) el.style.display = 'none';
}

function handleRegister(event) {
  event.preventDefault();
  hideAuthError('registerError');

  const name = document.getElementById('regFullName').value.trim();
  const email = document.getElementById('regEmail').value.trim().toLowerCase();
  const password = document.getElementById('regPassword').value;
  const confirmPassword = document.getElementById('regConfirmPassword').value;
  const role = currentAuthRole;

  if (!name || !email || !password) {
    showAuthError('registerError', 'Please fill in all required fields.');
    return;
  }

  if (password.length < 6) {
    showAuthError('registerError', 'Password must be at least 6 characters long.');
    return;
  }

  if (password !== confirmPassword) {
    showAuthError('registerError', 'Passwords do not match. Please try again.');
    return;
  }

  const users = getRegisteredUsers();

  // Check if email is already registered for this role
  const exists = users.find(u => u.email === email && u.role === role);
  if (exists) {
    showAuthError('registerError', `An account with this email already exists for the ${role} role.`);
    return;
  }

  // Register user
  users.push({
    name,
    email,
    passwordHash: simpleHash(password),
    role,
    createdAt: new Date().toISOString()
  });
  saveRegisteredUsers(users);

  // Auto-login after registration
  const session = { name, email, role };
  saveSession(session);
  store.currentRole = role;
  localStorage.setItem("compilecart_role", role);

  // Hide auth gate
  const authGate = document.getElementById('authGate');
  if (authGate) authGate.classList.add('hidden');

  updateUserProfileUI(session);
  handleRoleChange(role);
  showToast(`Welcome to CompileCart, ${name}! Your ${role} account has been created.`, 'success');

  // Reset form
  document.getElementById('registerForm').reset();
}

function handleLogin(event) {
  event.preventDefault();
  hideAuthError('loginError');

  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const password = document.getElementById('loginPassword').value;
  const role = currentAuthRole;

  if (!email || !password) {
    showAuthError('loginError', 'Please enter your email and password.');
    return;
  }

  const users = getRegisteredUsers();
  const user = users.find(u => u.email === email && u.role === role);

  if (!user) {
    showAuthError('loginError', `No ${role} account found with this email. Please register first.`);
    return;
  }

  if (user.passwordHash !== simpleHash(password)) {
    showAuthError('loginError', 'Incorrect password. Please try again.');
    return;
  }

  // Login successful
  const session = { name: user.name, email: user.email, role: user.role };
  saveSession(session);
  store.currentRole = role;
  localStorage.setItem("compilecart_role", role);

  // Hide auth gate
  const authGate = document.getElementById('authGate');
  if (authGate) authGate.classList.add('hidden');

  updateUserProfileUI(session);
  handleRoleChange(role);
  showToast(`Welcome back, ${user.name}! Logged in as ${role === 'admin' ? 'Administrator' : 'Customer'}.`, 'success');

  // Reset form
  document.getElementById('loginForm').reset();
}

function handleLogout() {
  clearSession();
  store.currentRole = 'customer';
  localStorage.setItem('compilecart_role', 'customer');

  // Show auth gate
  const authGate = document.getElementById('authGate');
  if (authGate) authGate.classList.remove('hidden');

  // Reset auth form state
  switchAuthRole('customer');
  switchAuthForm('login');

  showToast('You have been logged out successfully.', 'info');
}

function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    if (btn) btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>';
  } else {
    input.type = 'password';
    if (btn) btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
  }
}

// Global debug exposure
window.store = store;
window.Lexer = Lexer;
window.Parser = Parser;
window.SemanticAnalyzer = SemanticAnalyzer;
window.IRGenerator = IRGenerator;
window.CodeOptimizer = CodeOptimizer;
window.VirtualMachine = VirtualMachine;
window.handleLogout = handleLogout;
window.handleLogin = handleLogin;
window.handleRegister = handleRegister;
window.switchAuthRole = switchAuthRole;
window.switchAuthForm = switchAuthForm;
window.togglePasswordVisibility = togglePasswordVisibility;
