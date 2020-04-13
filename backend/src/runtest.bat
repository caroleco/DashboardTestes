date /t
f: &
cd F:/TrabalhoCarol/DashboardTest
cmd /c npm run delete:reports
cmd /c npm run report > F:/TrabalhoCarol/DashboardTest/output.txt
cmd /c npx mochawesome-merge frontend/src/results/*.json>frontend/src/output.json
@pause