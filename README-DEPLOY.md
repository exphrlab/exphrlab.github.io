# 자동 배포 가이드

이 저장소는 GitHub Pages를 통해 자동으로 배포됩니다.

## 자동 배포 방법

### 방법 1: 자동 배포 스크립트 사용 (권장)

```bash
# 기본 커밋 메시지로 배포
./auto-deploy.sh

# 커스텀 커밋 메시지로 배포
./auto-deploy.sh "커밋 메시지"
```

### 방법 2: 수동 Git 명령어

```bash
git add -A
git commit -m "커밋 메시지"
git push origin main
```

## GitHub Actions 자동 배포

`main` 브랜치에 푸시하면 자동으로 GitHub Actions가 실행되어 웹사이트가 배포됩니다.

- 워크플로우 파일: `.github/workflows/deploy.yml`
- 배포 상태 확인: GitHub 저장소의 "Actions" 탭에서 확인 가능
- 배포 완료까지 보통 1-2분 소요

## 웹사이트 URL

배포된 웹사이트: https://exphrlab.github.io/

## 주의사항

1. `main` 브랜치에 직접 푸시하면 자동으로 배포됩니다
2. 배포는 보통 1-2분 정도 소요됩니다
3. 배포 상태는 GitHub 저장소의 "Actions" 탭에서 확인할 수 있습니다

