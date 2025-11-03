---
title: "Our Team"
type: landing
aliases: ["/our-team/"] 
design:
  spacing: "4rem"
sections:
  # 1) PI만 (featured=true) — 1열, 크게
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
      
  # 2) 멤버 전원(PI 제외) — 3열, 둥근 카드
  - block: collection
    id: team-members
    content:
      title: "Team Members"
      filters:
        folders: ["people"]
        exclude_featured: true
    design:
      view: card
      columns: 3
      show_date: false
      show_reading_time: false
      css_class: "team-section"
---
