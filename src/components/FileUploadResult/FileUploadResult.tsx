import React, {ReactElement, useContext} from "react";
import {FileUploadListProps, FileUploadListItem} from "../../../types";
import {ReactMediaLibraryContext} from "../../context/ReactMediaLibraryContext";
import { FileTranslateProps } from "../../../types/components/FileTranslate";

export enum FileUploadStatus {
	FAILED = "failed",
	PROCESSING = "processing",
	SUCCESS = "success",
	ERROR = "error"
}

function renderIcon(status: FileUploadStatus): ReactElement {
	switch (status) {
		case FileUploadStatus.FAILED:
			return (
				<span className="icon-failed"/>
			);
		case FileUploadStatus.ERROR:
			return (
				<span className="icon-failed"/>
			);
		case FileUploadStatus.PROCESSING:
			return (
				<span className="icon-processing"/>
			);
		case FileUploadStatus.SUCCESS:
			return (
				<span className="icon-success"/>
			);
	}
}

function renderBadge(status: FileUploadStatus, translate : FileTranslateProps): ReactElement {


	

	switch (status) {
		case FileUploadStatus.FAILED:
			return (
				<div className="react-media-library__file-upload-result__list__item__icon-failed">
					{ translate ? translate.uploadFailed : "Failed" } 
				</div>
			);
		case FileUploadStatus.ERROR:
			return (
				<div className="react-media-library__file-upload-result__list__item__icon-failed">
					{ translate ? translate.uploadError : "Error for size" } 
				</div>
			);
		case FileUploadStatus.PROCESSING:
			return (
				<div className="react-media-library__file-upload-result__list__item__icon-processing">
					{ translate ? translate.uploadProssesing : "Processing" }
				</div>
			);
		case FileUploadStatus.SUCCESS:
			return (
				<div className="react-media-library__file-upload-result__list__item__icon-success">
					{ translate ? translate.uploadSuccess : "Success" }
				</div>
			);
	}
}

const FileUploadResult: React.FC<FileUploadListProps> = (props: FileUploadListProps): ReactElement => {

	const { translate } = useContext(ReactMediaLibraryContext);

	function renderList(): ReactElement[] {
		return props.fileUploadList.map((element: FileUploadListItem, index: number) => {
			return (
				<li
					key={index}
					className={`react-media-library__file-upload-result__list__item status-${element.status}`}
				>
					{renderIcon(element.status)}
					<div className="react-media-library__file-upload-result__list__item__filename">
						{element.fileName}
					</div>
					{renderBadge(element.status,translate)}
				</li>
			);
		});
	}

	return (
		<div className="react-media-library__file-upload-result">
			<h3>{ props.translate ? props.translate.uploadedFiles : "Uploaded Files" }</h3>
			<ul className="react-media-library__file-upload-result__list">
				{renderList()}
			</ul>
		</div>
	);
};

export default FileUploadResult;
