# ERP Management System

A responsive ERP (Enterprise Resource Planning) dashboard built with **React.js**.
The application provides a modular dashboard structure with CRM, Sales, Inventory, Purchase, Accounting, Manufacturing, Reports, Users, and Settings sections.

---

## Project Overview

This project is a frontend ERP management application developed using React.

The application contains:

- Fixed responsive header
- Collapsible sidebar
- Dashboard
- CRM / Customer Management
- Sales / Product Management
- Inventory Management
- Purchase module
- Accounting module
- Manufacturing module
- Reports
- Users module
- Settings module
- Search functionality
- Customer CRUD operations
- Delete confirmation dialog
- Toast notifications
- Responsive layouts
- Product cards
- Inventory tables
- KPI cards
- Stock overview
- Stock movement
- Category-wise stock information
- Coming Soon pages for modules that are still under development

---

## Tech Stack

### Frontend

- React.js
- JavaScript (JSX)
- CSS3
- HTML5

### Libraries Used

- React Icons
- React Toastify
- Material UI
- React Spinners
- Recharts

### Build Environment

The project uses a modern React setup with:

- `react`
- `react-dom`
- ES Modules
- JSX

---

# Project Structure

A simplified project structure is:

```text
src/
│
├── assets/
│   ├── erp.png
│   └── hand.png
│
├── components/
│   ├── Card.jsx
│   ├── CostomerData.jsx
│   ├── Delete.jsx
│   ├── Header.jsx
│   ├── Layout.jsx
│   ├── Profile.jsx
│   ├── Search.jsx
│   ├── Sidebar.jsx
│   ├── Breadcrumbs.jsx
│   │
│   ├── context/
│   │   └── SidebarContext.jsx
│   │
│   └── pages/
│       ├── Crm.jsx
│       ├── Sales.jsx
│       ├── KpiCard.jsx
│       ├── Inventory.jsx
│       ├── StokSummary.jsx
│       ├── Report.jsx
│       ├── Purchase.jsx
│       ├── Manufacturing.jsx
│       ├── Users.jsx
│       ├── Settings.jsx
│       └── ComingSoon.jsx
│
├── Data/
│   ├── Data.js
│   └── dashboard.json
│
├── App.jsx
├── Layout.jsx
├── main.jsx
└── index.css
```

> The exact file names can be adjusted according to the actual project directory.

---

# Application Layout

The application follows this basic structure:

```text
                    ┌──────────────────────────────┐
                    │           Header             │
                    │ Logo | Search | Notification │
                    │             | Profile        │
                    └──────────────────────────────┘
                    │
        ┌───────────┼──────────────────────────────┐
        │           │                              │
        │ Sidebar   │        Main Content          │
        │           │                              │
        │ Dashboard │        Breadcrumbs           │
        │ CRM       │        Page Header           │
        │ Sales     │        Page Content          │
        │ Purchase  │                              │
        │ Inventory │                              │
        │ Accounting│                              │
        │ Manuf.    │                              │
        │ Reports   │                              │
        │ Users     │                              │
        │ Settings  │                              │
        │           │                              │
        └───────────┴──────────────────────────────┘
```

---

# Sidebar Modules

The sidebar contains the following modules:

| Module        | Status      | Description                                  |
| ------------- | ----------- | -------------------------------------------- |
| Dashboard     | Functional  | KPI and dashboard reporting                  |
| CRM           | Functional  | Customer creation and management             |
| Sales         | Functional  | Product listing and product cards            |
| Purchase      | Coming Soon | Purchase management                          |
| Inventory     | Functional  | Stock management and inventory information   |
| Accounting    | Functional  | Currently displays inventory-related content |
| Manufacturing | Coming Soon | Manufacturing management                     |
| Reports       | Functional  | Chart-based reporting                        |
| Users         | Coming Soon | User management                              |
| Settings      | Coming Soon | Application settings                         |

---

# Dashboard

The Dashboard displays business KPIs and reporting information.

## KPI Cards

The dashboard currently contains:

- Total Customers
- Total Sales
- Total Purchase
- Total Products
- Total Stock
- Low Stock
- Out of Stock

Each KPI card contains:

- Label
- Value
- Growth/status information
- Icon
- Color theme

Example:

```text
Total Customers
1,248
+12.5% from last month
```

---

# Dashboard Reports

The Reports component uses **Recharts** to display data in a bar chart.

The chart receives KPI information from the dashboard data.

The current report implementation supports:

- Bar Chart
- X Axis
- Y Axis
- Tooltip
- Legend
- Responsive container

---

# CRM Module

The CRM module provides customer management functionality.

## Customer Master

The customer form contains:

### Basic Information

- Customer Code
- Customer Name
- Company
- Contact Person

### Contact Information

- Phone
- Email
- GST Number

### Address Information

- Address
- City
- State
- Country

### Commercial Information

- Credit Limit
- Payment Terms
- Price List
- Status

---

# CRM Functionality

The CRM module currently supports:

### Create Customer

Users can enter customer information and save a new customer.

A successful save displays a toast notification.

---

### Search Customer

Customer records can be searched using the global search field.

The current filtering is based on:

```text
Customer Name
```

---

### Edit Customer

Existing customers can be edited from the customer table.

The selected customer's information is loaded back into the form.

---

### Delete Customer

Customers can be deleted using the Delete action.

Before deletion, a confirmation dialog is displayed.

The confirmation dialog contains:

- Cancel
- Delete

---

### Customer Status Tabs

Customer records can be filtered using:

- All
- Active
- Inactive

---

### Toast Notifications

The CRM module uses React Toastify for notifications.

Examples:

```text
Customer saved successfully!
Customer updated successfully!
[field] is required!
```

---

# Sales Module

The Sales module displays products in a responsive card layout.

Each product card contains:

- Product image
- Product code
- Product name
- Category
- Description
- Purchase price
- Sale price
- Stock quantity
- GST
- Product status

---

# Sales Search

Products can be filtered using the global search field.

The current search implementation searches by:

```text
Product Name
```

Example:

```text
Search: Wireless
```

will display products containing `Wireless` in their name.

---

# Product Status

Products currently support:

- In Stock
- Out of Stock

When a product has zero stock:

```text
Out of Stock
```

is displayed and the Add to Cart button is disabled.

---

# Inventory Module

The Inventory module contains multiple sections.

## Stock Overview

The Stock Overview table displays:

- Product
- SKU
- Category
- Stock
- Minimum Stock
- Status
- Action

The table supports horizontal scrolling on smaller screens.

---

## Low Stock Products

The Low Stock section displays products that need restocking.

Information includes:

- Product
- SKU
- Remaining stock

Example:

```text
Wireless Mouse
MOU002
5 Left
```

---

## Recent Stock Movement

The Stock Movement section displays recent inventory transactions.

Information includes:

- Product
- Transaction Type
- Quantity
- Date
- Reference

Transaction types include:

```text
Stock In
Stock Out
```

---

## Category Stock

The Category Stock section displays stock distribution by category.

Current categories include:

- Electronics
- Accessories
- Furniture
- Office Supplies

Each category contains:

- Category name
- Stock quantity
- Description

---

# Purchase Module

The Purchase module is currently under development.

It currently displays a:

```text
Feature Coming Soon
```

screen.

Future functionality can include:

- Purchase Orders
- Vendors
- Purchase Invoices
- Purchase Returns
- Purchase Payments
- Vendor management

---

# Accounting Module

The Accounting section is currently connected to the existing Inventory component.

At the current stage, it displays inventory-related information.

This module can later be expanded to include:

- Accounts
- Ledger
- Journal Entries
- Receivables
- Payables
- Expenses
- Income
- Financial reports
- GST reports

---

# Manufacturing Module

The Manufacturing module is currently under development.

It displays the Coming Soon screen.

Possible future functionality:

- Bill of Materials
- Production Orders
- Raw Materials
- Production Planning
- Work Orders
- Manufacturing Stock
- Production Reports

---

# Reports Module

The Reports module uses Recharts for visualization.

Currently implemented:

- Bar Chart
- Responsive chart layout
- Tooltip
- Legend
- Axis
- Grid

The reporting structure can later be expanded with:

- Sales reports
- Purchase reports
- Inventory reports
- Customer reports
- Profit & Loss
- Stock movement reports
- GST reports

---

# Users Module

The Users module currently displays:

```text
Feature Coming Soon
```

Possible future functionality:

- User creation
- User editing
- User deletion
- Roles
- Permissions
- Admin users
- User status
- Access control

---

# Settings Module

The Settings module currently displays:

```text
Feature Coming Soon
```

Possible future functionality:

- Company information
- User preferences
- Notification settings
- Tax settings
- Currency settings
- Application configuration

---

# Header

The application header contains:

## Logo

The ERP logo is loaded from the assets folder.

```text
assets/erp.png
```

## Search

The global search component is connected to the `SidebarContext`.

The search value can be used by different modules.

Currently it is used by:

- Sales
- CRM

## Notification

The header contains a notification button with a notification counter.

The counter is updated when a new customer is created.

## Profile

The profile component contains:

- User avatar
- User name
- User role
- Profile dropdown

Current profile:

```text
John Doe
Admin
```

Dropdown options:

- My Profile
- Account Settings
- Logout

---

# Sidebar

The Sidebar component is responsible for navigation.

It contains all ERP modules.

The sidebar supports:

- Active page selection
- Collapse/expand
- Icons
- Responsive layout

The Sidebar state is managed through:

```text
SidebarContext
```

---

# Sidebar Context

The `SidebarContext` is used to manage common application state.

The context is used for values such as:

- `activePage`
- `setActivePage`
- `isCollapsed`
- `setIsCollapsed`
- `search`
- Search handler
- Notification count
- Dashboard data
- Loading state

This allows different components to access shared application state without passing props through multiple component levels.

---

# Breadcrumbs

The Breadcrumbs component displays the current navigation location.

Example:

```text
Home > Dashboard
```

or:

```text
Home > CRM
```

The current page is obtained from `SidebarContext`.

---

# Data Management

The project currently uses local static data.

The data is stored inside the Data folder.

Example:

```text
Data/
├── Data.js
└── dashboard.json
```

---

# Dashboard JSON Data

The dashboard data contains sections such as:

```text
kpi
stockOverview
lowStockProducts
stockMovement
categoryStock
```

---

# KPI Data

KPI data contains fields such as:

```json
{
  "id": 1,
  "label": "Total Customers",
  "value": "1,248",
  "growth": "+12.5% from last month",
  "color": "blue"
}
```

---

# Stock Overview Data

Stock overview contains:

```text
Product
SKU
Category
Stock
Minimum Stock
Status
```

---

# Low Stock Data

Low stock records contain:

```text
Product
SKU
Stock
```

---

# Stock Movement Data

Stock movement records contain:

```text
Product
Type
Quantity
Date
Reference
```

---

# Category Stock Data

Category stock contains:

```text
Category
Stock
Description
```

---

# Product Data

Products are stored in:

```text
Data/Data.js
```

Each product contains:

```text
id
productCode
name
description
category
price
purchasePrice
stock
gst
image
status
```

Example:

```js
{
  id: 1,
  productCode: "P001",
  name: "Wireless Headphones",
  category: "Electronics",
  price: 2499,
  purchasePrice: 1800,
  stock: 35,
  gst: 18,
  status: "In Stock"
}
```

---

# Assets

Static images are stored inside the assets folder.

Example:

```text
src/assets/
├── erp.png
└── hand.png
```

### `erp.png`

Used as the ERP application logo.

### `hand.png`

Used by the Coming Soon component.

---

# Responsive Design

The application has responsive CSS for:

- Desktop
- Tablet
- Mobile
- Small mobile
- Very small mobile

Main responsive breakpoints currently include:

```text
1200px
1023px
767px
576px
480px
380px
```

---

# Responsive Sidebar

On desktop:

```text
Expanded Sidebar
220px
```

Collapsed:

```text
70px
```

On smaller mobile screens the sidebar is automatically displayed in compact icon-only mode.

---

# Responsive Product Grid

Product layout changes according to screen width.

Desktop:

```text
4 columns
```

Medium screens:

```text
3 columns
```

Tablet:

```text
2 columns
```

Mobile:

```text
1 column
```

---

# Responsive Tables

Large tables use horizontal scrolling on smaller screens.

This prevents the table from breaking the page layout.

---

# Reusable Components

The project contains reusable components including:

### Header

Application header and navigation actions.

### Sidebar

ERP module navigation.

### Profile

User profile and dropdown.

### Search

Global search input.

### Breadcrumbs

Current page navigation.

### Card

Reusable product card.

### Delete

Reusable customer deletion confirmation dialog.

### CostomerData

Customer table and customer status filtering.

### ComingSoon

Placeholder UI for modules that are not implemented yet.

---

# Current Functionality

## Functional

- Dashboard KPI cards
- Dashboard report chart
- Sidebar navigation
- Sidebar collapse
- Global search
- CRM customer creation
- CRM customer validation
- CRM customer editing
- CRM customer deletion
- Customer status filtering
- Customer search
- Toast notifications
- Sales product listing
- Product search
- Product stock status
- Inventory stock overview
- Low stock listing
- Stock movement listing
- Category stock listing
- Responsive design
- Profile dropdown
- Notification counter

---

# Currently Under Development

The following modules currently use the Coming Soon component:

- Purchase
- Manufacturing
- Users
- Settings

Accounting currently exists in the navigation but is using the existing Inventory component and can be expanded into a dedicated accounting module.

---

# Installation

Clone the project and install dependencies.

```bash
npm install
```

---

# Start Development Server

Run:

```bash
npm run dev
```

Then open the local development URL shown by the terminal.

---

# Build for Production

Create a production build:

```bash
npm run build
```

---

# Preview Production Build

```bash
npm run preview
```

---

# Development Flow

The general application flow is:

```text
main.jsx
   ↓
App.jsx
   ↓
SidebarProvider
   ↓
Layout
   ├── Header
   ├── Sidebar
   └── Main Content
          ↓
       Dashboard
          ↓
      Active Module
```

The active module is controlled through:

```text
SidebarContext
```

---

# Future Improvements

The project can be expanded with:

- React Router
- Backend API integration
- Database integration
- Authentication
- Role-based access control
- Persistent customer data
- Persistent product data
- CRUD operations for products
- Purchase management
- Accounting management
- Manufacturing management
- User management
- Settings management
- Advanced reports
- Export to Excel/PDF
- Pagination
- Sorting
- Advanced filters
- Form validation
- API loading/error states
- Dark mode
- Notification center

---

# Important Notes

The current project primarily uses frontend/local state.

Customer records are currently maintained using React state and will reset when the application is refreshed.

Product and dashboard information is currently provided through local JavaScript/JSON data.

For a production ERP system, these records should eventually be connected to a backend API and database.

---

# Module Summary

```text
ERP
│
├── Dashboard
│   ├── KPI Cards
│   └── Reports
│
├── CRM
│   ├── Customer Master
│   ├── Create Customer
│   ├── Edit Customer
│   ├── Delete Customer
│   ├── Search
│   └── Active / Inactive Filter
│
├── Sales
│   ├── Product Cards
│   ├── Product Search
│   └── Stock Status
│
├── Purchase
│   └── Coming Soon
│
├── Inventory
│   ├── Stock Overview
│   ├── Low Stock
│   ├── Stock Movement
│   └── Category Stock
│
├── Accounting
│   └── Current Inventory-based Implementation
│
├── Manufacturing
│   └── Coming Soon
│
├── Reports
│   └── Recharts Visualization
│
├── Users
│   └── Coming Soon
│
└── Settings
    └── Coming Soon
```

---

# Conclusion

This project provides the frontend foundation for a modular ERP management system.

The application already includes the core dashboard structure, CRM customer management, sales product management, inventory information, reporting, responsive UI, shared context state, notifications, and reusable components.

Additional ERP modules can be implemented incrementally without changing the overall application architecture.
