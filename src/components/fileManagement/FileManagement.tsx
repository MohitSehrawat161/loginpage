import FileManager, {
  FileManagerTypes,
  Permissions,
} from "devextreme-react/file-manager";
import RemoteFileSystemProvider from "devextreme/file_management/remote_provider";
import { useNavigate } from "react-router-dom";
import notify from "devextreme/ui/notify";
import React, { useEffect } from "react";
import { Button } from "devextreme-react/button";
import { Link } from "react-router-dom";
import UploadInfo from "devextreme/file_management/upload_info";
import { Value } from "devextreme-react/cjs/range-selector";

export default function FileManagement() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const navigate = useNavigate();
  const showError = (message: string, type: string) => {
    notify(
      {
        message: message,
        width: 230,
        position: {
          at: "bottom",
          my: "bottom",
          of: "#container",
        },
      },
      type,
      5000
    );
  };
  useEffect(() => {
    if (isLoggedIn !== "true") {
      navigate("/login");
      showError("Log in first", "error");
    }
  }, []);
  const handlePermissionsChange = (e: any) => {
    console.log(e, typeof e.fileData);
    let obj = { ...e.file };
    console.log("js", obj);
    localStorage.setItem("files", JSON.stringify(obj));
  };
  const displayImagePopup = (e: FileManagerTypes.SelectedFileOpenedEvent) => {
    console.log(typeof e.file, e.file);
    console.log({ ...e.file });
    localStorage.setItem("files", JSON.stringify({ ...e.file }));
  };

  const remoteProvider = new RemoteFileSystemProvider({
    endpointUrl:
      "https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-images",
  });
  let savedFiles: any = localStorage.getItem("files");
  let allFiles;
  if (!savedFiles) {
    allFiles = JSON.parse(savedFiles);
  }

  console.log(allFiles, savedFiles);

  return (
    <React.Fragment>
      <p style={{ textAlign: "end", width: "98%" }}>
        <Link to={"/login"}>
          <Button text="Sign out" />
        </Link>
      </p>

      <FileManager
        onSelectedFileOpened={displayImagePopup}
        onFileUploaded={handlePermissionsChange}
        fileSystemProvider={allFiles}
      >
        <Permissions
          create={true}
          copy={true}
          move={true}
          delete={true}
          rename={true}
          upload={true}
          download={true}
        ></Permissions>
      </FileManager>
    </React.Fragment>
  );
}
