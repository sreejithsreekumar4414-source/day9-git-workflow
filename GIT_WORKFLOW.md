# Day 9 - Git Workflow Guide

**Student:** Sreejith Sreekumar  
**Date:** February 18, 2026  
**Topic:** Git & Professional Workflow

---

## What I Learned Today

### 1. Git Basics

**Initialize Repository:**
```bash
git init
```

**Check Status:**
```bash
git status
```

**Add Files:**
```bash
git add .                # Add all files
git add filename.js      # Add specific file
```

**Commit Changes:**
```bash
git commit -m "commit message"
```

---

### 2. Branching Strategy

**Why Branches?**
- Keep main branch clean
- Work on features separately
- Easy to rollback if needed

**Create Branch:**
```bash
git branch feature/search-functionality
git checkout feature/search-functionality
```

**Or shortcut:**
```bash
git checkout -b feature/search-functionality
```

**Switch Branches:**
```bash
git checkout main
git checkout feature/search-functionality
```

**List Branches:**
```bash
git branch              # Local branches
git branch -a           # All branches
```

---

### 3. Commit Message Best Practices

**Format:**
```
type: brief description (max 50 chars)

- Detailed explanation
- What changed
- Why changed
```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation only
- `style:` Formatting, no code change
- `refactor:` Code restructuring
- `test:` Adding tests
- `chore:` Maintenance

**Good Examples:**
```bash
git commit -m "feat: add search functionality

- Added SearchBar component
- Implemented filter logic in HomePage
- Users can now search jobs by title"
```

```bash
git commit -m "fix: correct job card spacing

- Fixed margin issue in JobCard
- Cards now align properly in grid"
```

**Bad Examples:**
```bash
git commit -m "updated files"        # ❌ Too vague
git commit -m "fix"                  # ❌ No details
git commit -m "asdfasdf"             # ❌ Meaningless
```

---

### 4. Pull Requests (PR)

**What is a PR?**
- Request to merge your branch into main
- Allows code review
- Professional workflow

**Steps:**
1. Create feature branch
2. Make changes
3. Commit and push
4. Create PR on GitHub
5. Wait for review
6. Merge if approved

**Creating PR on GitHub:**
1. Go to repository
2. Click "Pull requests"
3. Click "New pull request"
4. Select your branch
5. Add title and description
6. Click "Create pull request"

---

### 5. README Writing

**Good README includes:**
- Project title and description
- Installation instructions
- Usage guide
- Technologies used
- Project structure
- Contributing guidelines
- Author info

**Markdown Basics:**
```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- List item
- List item

[Link](https://example.com)

`code`
```

---

## My Workflow Today

### Step 1: Initialize Repo
```bash
git init
git add .
git commit -m "initial commit: setup project structure"
```

### Step 2: Create Feature Branch
```bash
git checkout -b feature/search-functionality
```

### Step 3: Add Search Feature
- Created SearchBar component
- Added search logic to HomePage
- Updated styling

### Step 4: Commit Changes
```bash
git add src/components/SearchBar.jsx
git commit -m "feat: add SearchBar component

- Created new SearchBar component
- Includes search input and clear button
- Filters jobs by title"
```

```bash
git add src/pages/HomePage.jsx
git commit -m "feat: integrate search in HomePage

- Added handleSearch function
- Connected SearchBar to JobList
- Search filters jobs in real-time"
```

### Step 5: Merge to Main
```bash
git checkout main
git merge feature/search-functionality
```

### Step 6: Push to GitHub
```bash
git push origin main
git push origin feature/search-functionality
```

---

## Key Takeaways

1. **Always use branches** for new features
2. **Write clear commit messages** with proper format
3. **Commit often** with small, logical changes
4. **Never commit directly to main** in team projects
5. **Write good README** for every project
6. **Pull requests** enable code review
7. **Git is essential** for professional development

---

## Common Git Commands

```bash
# Check status
git status

# View commit history
git log
git log --oneline

# View differences
git diff

# Undo changes (careful!)
git reset HEAD filename     # Unstage file
git checkout -- filename    # Discard changes

# Delete branch
git branch -d feature/name

# Update from remote
git pull origin main

# Push to remote
git push origin branch-name
```

---

## What I Built Today

- Job portal with search functionality
- SearchBar component (new feature!)
- Professional README
- Clean Git history
- Feature branch workflow

---

**Internship Progress:** Day 9/70 Complete ✓
