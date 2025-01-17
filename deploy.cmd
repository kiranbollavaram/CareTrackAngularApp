:: Deployment
:: ----------
 :Deployment
echo Handling node.js deployment.
 :: 1. Select node version
call :SelectNodeVersion
 :: 2. Install npm packages
IF EXIST "%DEPLOYMENT_SOURCE%\package.json" (
  pushd "%DEPLOYMENT_SOURCE%"
  call :ExecuteCmd !NPM_CMD! install
  IF !ERRORLEVEL! NEQ 0 goto error
  popd
)
 
:: 3. Angular Prod build
IF EXIST "%DEPLOYMENT_SOURCE%\.angular.json" (
   echo Building App in %DEPLOYMENT_SOURCE%...
   pushd "%DEPLOYMENT_SOURCE%"
      call :ExecuteCmd "!NPM_CMD!" run build
      IF !ERRORLEVEL! NEQ 0 goto error
      popd
)
  :: 4. Copy web.config
  IF EXIST "%DEPLOYMENT_SOURCE%\web.config" (
      pushd "%DEPLOYMENT_SOURCE%"
      call :ExecuteCmd cp web.config dist\CareTrack\
      IF !ERRORLEVEL! NEQ 0 goto error
      popd
)
:: 5. KuduSync
IF /I "%IN_PLACE_DEPLOYMENT%" NEQ "1" (
  call :ExecuteCmd "%KUDU_SYNC_CMD%" -v 50 -f "%DEPLOYMENT_SOURCE%/dist" -t "%DEPLOYMENT_TARGET%" -n "%NEXT_MANIFEST_PATH%" -p "%PREVIOUS_MANIFEST_PATH%" -i ".git;.hg;.deployment;deploy.cmd"
  IF !ERRORLEVEL! NEQ 0 goto error
)
