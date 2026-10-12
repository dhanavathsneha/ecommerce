# CompileCart ⚡ E-Commerce Rule Compiler

A full-stack style modern shopping platform integrated with a real **Domain-Specific Language (DSL) Compiler Engine** for promotional discounts and e-commerce business rules.

Developed as a pair-programming project for **Sneha Dhanavath**'s **Compiler Design** course curriculum.

---

## 🌟 Overview & Key Highlights

CompileCart bridges modern e-commerce shopping with rigorous computer science compiler theory:
- **E-Commerce Marketplace**: Multi-category catalogue (Fashion, Electronics, Beauty, Home & Living, Footwear, Accessories), keyword search, price/rating/stock filters, sorting, wishlist, interactive shopping bag, and checkout simulation.
- **Admin Dashboard**: Product creation/editing/deletion, stock inventory management, order tracking, and promotion activation.
- **Compiler Studio**: A live, multi-phase compiler pipeline:
  1. **Lexical Analysis (Lexer)**: Tokenizes rule source into classified tokens (`KEYWORD`, `IDENTIFIER`, `OPERATOR`, `LITERAL_STRING`, `LITERAL_NUMBER`, `DELIMITER`) with exact line and column locations.
  2. **Syntax Analysis (Parser)**: Recursive-descent LL(1) parsing validating against an EBNF grammar and constructing an **Abstract Syntax Tree (AST)**.
  3. **Semantic Analysis**: Symbol table validation, type compatibility checks, operator constraint enforcement, and discount boundary validation (`1% <= discount <= 100%`).
  4. **Intermediate Code Generation (IR)**: Stack-based three-address bytecode (`LOAD`, `PUSH`, `CMP_EQ`, `CMP_GT`, `JUMP_IF_FALSE`, `SET_DISCOUNT`, `HALT`).
  5. **Code Optimization**: Constant folding, redundant jump elimination, and dead code removal with before/after metric reduction comparison.
  6. **Virtual Machine (Interpreter)**: Stack machine executing bytecode safely against cart data without `eval()`, returning an instruction trace and stack snapshots.
- **Direct Store Integration**: Active compiled rules genuinely control the shopping cart pricing engine, calculating discounts dynamically!

---

## 🚀 How to Run on macOS

### Option 1: VS Code with Live Server (Recommended)
1. Open the folder `/Users/snehadhanavath/Desktop/ecommerce` in **VS Code**.
2. Right-click `index.html` and click **"Open with Live Server"**.
3. The application will launch at `http://127.0.0.1:5500/index.html`.

### Option 2: Python Local Server
Run in Terminal:
```bash
cd /Users/snehadhanavath/Desktop/ecommerce
python3 -m http.server 8080
```
Then visit `http://localhost:8080` in Chrome, Safari, or Arc.

### Option 3: Direct File Open
Double click `index.html` or run:
```bash
open /Users/snehadhanavath/Desktop/ecommerce/index.html
```

---

## 📐 Formal Grammar Specification (EBNF)

```ebnf
<Rule>               ::= "RULE" <Identifier> "{" <IfClause> <ThenClause> "}"
<IfClause>           ::= "IF" <LogicalExpr>
<ThenClause>         ::= "THEN" <Action>
<LogicalExpr>        ::= <OrExpr>
<OrExpr>             ::= <AndExpr> ( "OR" <AndExpr> )*
<AndExpr>            ::= <ComparisonExpr> ( "AND" <ComparisonExpr> )*
<ComparisonExpr>     ::= <Identifier> <RelOp> <Literal>
<RelOp>              ::= "==" | "!=" | ">" | ">=" | "<" | "<="
<Literal>            ::= <StringLiteral> | <NumberLiteral>
<Action>             ::= "discount" "=" <NumberLiteral>
```

---

## 🧪 Verification of SRS Test Cases (TC-01 through TC-12)

Inside **Compiler Studio**, open the **"🧪 Test Suite (12)"** tab and click **"Execute All Tests Now"** to run automated verifications:

| Test ID | Scenario | Expected Result | Status |
|---|---|---|---|
| **TC-01** | Compile valid promotion rule | Compilation succeeds (Tokens, AST, IR generated) | **PASS** |
| **TC-02** | Omit the `THEN` keyword | Syntax error with line & column position | **PASS** |
| **TC-03** | Use unknown variable (e.g. `tax_rate`) | Semantic error: Undeclared variable | **PASS** |
| **TC-04** | Set discount to 120% | Semantic error: Exceeds 100% boundary | **PASS** |
| **TC-05** | Cart total above threshold (e.g. > ₹3,000) | Eligible discount calculated and applied | **PASS** |
| **TC-06** | Cart total below threshold | Condition evaluates false (0% discount) | **PASS** |
| **TC-07** | Execute a disabled/inactive rule | Ignored by pricing engine | **PASS** |
| **TC-08** | Add more units than stock permits | Request rejected with warning | **PASS** |
| **TC-09** | Admin adds a product | Product immediately appears in catalogue | **PASS** |
| **TC-10** | Customer attempts admin operation | Access denied with authorization error | **PASS** |
| **TC-11** | Refresh the browser | State retained in `localStorage` | **PASS** |
| **TC-12** | Compare optimized vs unoptimized IR | Results remain strictly equivalent | **PASS** |

---

## 📁 Project File Structure
```
ecommerce/
├── index.html       # Semantic HTML5 layout, modals, views & visualizer DOM
├── style.css        # Luxury dark slate design system, animations, responsive CSS
├── script.js        # Lexer, Parser, AST, Semantic Engine, IR, VM, Store & Tests
└── README.md        # Academic documentation and setup instructions
```
