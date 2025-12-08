#!/bin/bash

# 자동 배포 스크립트
# 사용법: ./auto-deploy.sh "커밋 메시지"

# 색상 정의
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 자동 배포 시작...${NC}"

# 커밋 메시지 확인
if [ -z "$1" ]; then
    COMMIT_MSG="Auto-deploy: $(date '+%Y-%m-%d %H:%M:%S')"
    echo -e "${YELLOW}⚠️  커밋 메시지가 제공되지 않았습니다. 기본 메시지 사용: ${COMMIT_MSG}${NC}"
else
    COMMIT_MSG="$1"
fi

# Git 상태 확인
echo -e "${YELLOW}📋 변경사항 확인 중...${NC}"
git status --short

# 변경사항이 있는지 확인
if [ -z "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}⚠️  변경사항이 없습니다.${NC}"
    exit 0
fi

# 모든 변경사항 추가
echo -e "${YELLOW}📦 변경사항 스테이징 중...${NC}"
git add -A

# 커밋
echo -e "${YELLOW}💾 커밋 중...${NC}"
git commit -m "$COMMIT_MSG"

# 푸시
echo -e "${YELLOW}📤 GitHub에 푸시 중...${NC}"
git push origin main

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ 성공적으로 배포되었습니다!${NC}"
    echo -e "${GREEN}🌐 웹사이트: https://exphrlab.github.io/${NC}"
    echo -e "${YELLOW}⏳ GitHub Pages 배포는 보통 1-2분 정도 소요됩니다.${NC}"
else
    echo -e "${RED}❌ 배포 중 오류가 발생했습니다.${NC}"
    exit 1
fi

