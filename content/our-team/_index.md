---
title: "Our Team"
type: landing

design:
  spacing: "4rem"

sections:
  # 🔹 PI 단독 섹션 (맨 위, 1열, 크게)
  - block: collection
    id: team-pi
    content:
      title: ""
      filters:
        folders:
          - people
      featured_only: true     # ← filters 밖에 위치!
    design:
      view: card
      columns: 1
      show_date: false
      show_authors: false
      show_read_more: false
      link_to_detail: false
      css_class: "team-compact team-hero"  # 둥근 아바타 + PI 크게

  # 🔹 팀원 섹션 (아래, 3열 그리드)
  - block: collection
    id: team-members
    content:
      title: ""
      filters:
        folders:
          - people
        exclude_featured: true
    design:
      view: card
      columns: 3
      show_date: false
      show_authors: false
      show_read_more: false
      link_to_detail: false
      css_class: "team-compact"            # 둥근 아바타 + 간결 카드
---
