import FileManager, { FileManagerTypes, Permissions } from 'devextreme-react/file-manager';
export default function FileManagement(){

    return (
        <FileManager>
            <Permissions 
            upload={true}
            create={true}
            />

        </FileManager>

    )
}