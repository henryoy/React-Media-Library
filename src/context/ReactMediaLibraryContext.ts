import {createContext} from "react";
import {ReactMediaLibraryContextType} from "../../types";

const reactMediaLibraryDefaultContext: ReactMediaLibraryContextType = {
	fileLibraryList: [],
	selectedItems: [],
	size: 0,
	translate:{
		titleModal:"Media Library",
		dragTitle: "Drop the files here ...",
		dragSubtitle:"Drag 'n' drop some files here, or click to select files",
		uploadFailed:"Failed",
		uploadProssesing:"Processing",
		uploadSuccess:"Success",
		uploadFiles:"Upload File",
		browseFiles:"Browse Files",
		nofiles:"No files available. Please upload a file.",
		uploadedFiles: "Uploaded Files",
		deleteFile:"Delete {%n} file",
		selectFile:"Select {%n} file"
	},
	setSelectedItems: () => {
	},
	fileUploadCallback: async () => false,
	filesSelectCallback: () => {
	},
	sortProperty: "createdAt",
	sortAscending: false,
	multiSelect: false,
	defaultSelectedItemIds: [],
}

export const ReactMediaLibraryContext = createContext<ReactMediaLibraryContextType>(reactMediaLibraryDefaultContext);
