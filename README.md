# opendev-env
Developer environment validation tool

# OpenDevEnv

OpenDevEnv is a lightweight, open-source developer environment manager that helps projects define, validate, and standardize development environments for contributors.

It reduces setup time, prevents environment issues, and makes open-source projects easier to contribute to.

---

## 🚨 The Problem

Setting up a development environment is one of the biggest barriers for developers and contributors.

Common challenges include:

- "It works on my machine" problems
- Outdated or incomplete README setup instructions
- Version mismatches across operating systems
- Long onboarding time for new contributors
- Complex setup requirements causing contributor drop-off

These issues slow down development and reduce participation in open-source projects.

---

## ❌ Why Existing Tools Fall Short

### Docker
- Heavy for small projects
- Requires additional setup and resources
- Not beginner-friendly

### Nix / NixOS
- Powerful but steep learning curve
- Complex configuration

### Editor-specific solutions
- Often tied to specific editors
- Not universally usable

### README documentation
- Manual and often outdated
- Not executable or verifiable

There is currently no simple, lightweight, editor-agnostic tool that validates development environments.

---

## 💡 Our Solution

OpenDevEnv provides a simple configuration-based approach to defining and validating development environments.

Projects define their environment in a single configuration file, and OpenDevEnv ensures contributors have everything required to start development.

---

## ✨ Features (MVP)

- Environment validation via CLI
- Tool and runtime version checks
- OS-aware installation guidance
- Contributor environment diagnostics
- Automatic README setup generation
- Lightweight and editor-independent

---

## 🧑‍💻 How It Works

1. Maintainer defines environment in `opendev.yaml`
2. Contributor clones repository
3. Contributor runs:

```bash
opendev check
```

4. Tool verifies environment and reports missing dependencies.

---

## 📦 Example Configuration

```yaml
name: sample-project
runtime:
  - node >=18
  - python >=3.10
tools:
  - git
scripts:
  setup: npm install
```

---

## 🏗 Architecture

- CLI Interface
- YAML Configuration Parser
- Environment Validation Engine
- OS Detection Module
- Documentation Generator

---

## 🌍 Why Open Source?

Developer tooling must be transparent, extensible, and community-driven.

OpenDevEnv is fully open-source to ensure:

- Community contributions
- Transparency
- Trust
- Long-term sustainability
- No vendor lock-in

---

## 🗺 Roadmap (1 Month Plan)

### Week 1
- CLI setup
- Configuration parser
- Basic project structure

### Week 2
- Runtime and tool detection
- Version validation

### Week 3
- Diagnostic output
- Error handling and UX improvements

### Week 4
- README generator
- Documentation
- Demo project
- Final testing

---

## 🤝 Contributing

We welcome contributions from developers, designers, and documentation writers.

Please read `CONTRIBUTING.md` for details.

---

## 📜 License

This project is licensed under the Apache License 2.0.

---

## ⭐ Vision

Our goal is to make contributing to software projects easier by eliminating environment setup friction and improving developer onboarding globally.

