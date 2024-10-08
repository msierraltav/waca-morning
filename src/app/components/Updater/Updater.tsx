import { check } from "@tauri-apps/plugin-updater";
import { relaunch } from "@tauri-apps/plugin-process";
import { getVersion } from '@tauri-apps/api/app';
import { useEffect, useState } from "react";

export default function Updater() {


  const [appVersion, setAppVersion] = useState<string>("0.0.0");

  useEffect(() => {
    const doGetVersion = async() => {
      await getVersion()
      .then(version => setAppVersion(version))
      .catch(error => console.error(error));
    }
    doGetVersion();
  },[])

  const doUpdate = async () => {

    const update = await check();
    if(update){
      let answer = window.confirm("Update Available , ¿ upgrade ?");
      if (answer && update) {
        console.log(
          `found update ${update.version} from ${update.date} with notes ${update.body}`
        );
        let downloaded = 0;
        let contentLength: undefined | number = 0;
        // alternatively we could also call update.download() and update.install() separately
        await update.downloadAndInstall((event) => {
          switch (event.event) {
            case "Started":
              contentLength = event.data.contentLength;
  
              contentLength === undefined
                ? console.log(
                    `started downloading ${event.data.contentLength} bytes`
                  )
                : console.log(`no data length available.`);
              break;
            case "Progress":
              downloaded += event.data.chunkLength;
              console.log(`downloaded ${downloaded} from ${contentLength}`);
              break;
            case "Finished":
              console.log("download finished");
              break;
          }
        });
        let finalAnswer = window.confirm("Update Installer , ¿ restart app ?");
        finalAnswer? await relaunch() :  console.log("update installed");
      }
    }
  };

  return (
    <>
      <span onClick={() => doUpdate()}>{`Wacamorning v${appVersion}`} 💫 </span>
    </>
  );
}
