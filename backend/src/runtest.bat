date /t
f: &
cd F:/TrabalhoCarol/DashboardTest
cmd /c npm run delete:reports
cmd /c npm run report > F:/TrabalhoCarol/DashboardTest/result.txt
cmd /c npm run merge
cmd copy result.txt output.txt
cmd s