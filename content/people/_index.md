---
title: "Our Team"
type: landing
aliases: ["/our-team/"] 
design:
  spacing: "4rem"
sections:
  # 1) Principal Investigator
  - block: collection
    id: team-pi
    content:
      title: "Principal Investigator"
      filters:
        folders: ["people"]
        featured_only: true
    design:
      view: card
      columns: 1
      show_date: false
      show_reading_time: false
      css_class: "team-section"
      
  # 2) Postdoctoral Fellows
  - block: collection
    id: team-postdoc
    content:
      title: "Postdoctoral Fellows"
      filters:
        folders: ["people"]
        exclude_featured: true
        weight:
          min: 10
          max: 19
    design:
      view: card
      columns: 3
      show_date: false
      show_reading_time: false
      css_class: "team-section"
      
  # 3) Graduate Research Assistants
  - block: collection
    id: team-grad
    content:
      title: "Graduate Research Assistants"
      filters:
        folders: ["people"]
        exclude_featured: true
        weight:
          min: 20
          max: 29
    design:
      view: card
      columns: 3
      show_date: false
      show_reading_time: false
      css_class: "team-section"
      
  # 4) Other Research Staff / Research Assistants
  - block: collection
    id: team-staff
    content:
      title: "Other Research Staff / Research Assistants"
      filters:
        folders: ["people"]
        exclude_featured: true
        weight:
          min: 30
          max: 99
    design:
      view: card
      columns: 3
      show_date: false
      show_reading_time: false
      css_class: "team-section"
---
