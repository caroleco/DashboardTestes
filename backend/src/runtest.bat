date /t
f: &
cd F:/TrabalhoCarol/DashboardTest
cmd /c npm run delete:reports
cmd /c npm run report > F:/TrabalhoCarol/DashboardTest/result.txt
cmd /c npm run merge
cd frontend/src/files
copy output_temp.json output.json /y
cmd s