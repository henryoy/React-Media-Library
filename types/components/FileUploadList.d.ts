import { FileTranslateProps } from "./FileTranslate";
import {FileUploadListItem} from "./FileUpload";

export interface FileUploadListProps {
	translate: FileTranslateProps;
	fileUploadList: Array<FileUploadListItem>;
}
