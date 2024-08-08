import React, {MouseEvent, ReactElement, useEffect, useState} from "react";
import ReactMediaLibraryTabs from "../ReactMediaLibraryTabs/ReactMediaLibraryTabs";
import {FileLibraryListItem, ReactMediaLibraryProps} from "../../../types";
import {ReactMediaLibraryContext} from "../../context/ReactMediaLibraryContext";
import FileLibraryCard from "../FileLibraryCard/FileLibraryCard";
import {FileLibrarySelectedItems} from "../FileLibrarySelectedItems";

const ReactMediaLibrary: React.FC<ReactMediaLibraryProps> = ({
	defaultSelectedItemIds,
	modalTitle = "Media Library",
	sortProperty = "createdAt",
	sortAscending = false,
	isOpen = false,
	multiSelect = false,
	size = 1,
	translate = {
		titleModal:"Media Library",
		/** Title an text in drag ann drop field **/
		dragTitle: "Suelta los archivos aquí...",
		dragSubtitle:"Arrastre y suelte algunos archivos aquí o haga clic para seleccionar archivos",
		uploadError: "Peso no valido",
		uploadFailed:"Fallido",
		uploadProssesing:"Procesando",
		uploadSuccess:"Correcto",
		uploadFiles:"Subir archivos",
		browseFiles:"Búsqueda de archivos",
		nofiles:"No files available. Please upload a file.",
		uploadedFiles:"Archivos subidos",
		deleteFile:"Borrar {%n} archivo",
		selectFile:"Seleccione {%n} archivo"
	},
	fileLibraryList = [],
	libraryCardComponent = (item) => (<FileLibraryCard {...item} />),
	selectedItemsComponent = () => (<FileLibrarySelectedItems/>),
	acceptedTypes = ["image/*"],
	onClose,
	fileUploadCallback,
	finishUploadCallback,
	filesSelectCallback,
	filesDeleteCallback,
	topBarComponent,
}: ReactMediaLibraryProps): ReactElement => {
	const [selectedItems, setSelectedItems] = useState<Array<FileLibraryListItem>>([]);
	const filterDefaultSelected = fileLibraryList.filter((item) => defaultSelectedItemIds?.includes(item._id));

	useEffect(() => {
		// Asset loads are sometimes async.
		// Need to check the default and reselect if either the file library list or default select list is updated.
		if (defaultSelectedItemIds?.length) {
			setSelectedItems(filterDefaultSelected);
		} else {
			setSelectedItems([]);
		}
	}, [fileLibraryList, defaultSelectedItemIds]);

	function handleModalOnClick(e: MouseEvent) {
		// Prevent event propagation on child elements
		if (e.currentTarget != e.target) return;
		onClose();
	}

	if (!isOpen) {
		return <React.Fragment/>;
	}

	return (
		<ReactMediaLibraryContext.Provider
			value={{
				size:size,
				translate:translate,
				selectedItems: selectedItems,
				setSelectedItems: setSelectedItems,
				multiSelect: multiSelect,
				fileLibraryList: fileLibraryList,
				fileUploadCallback: fileUploadCallback,
				finishUploadCallback: finishUploadCallback,
				filesSelectCallback: filesSelectCallback,
				filesDeleteCallback: filesDeleteCallback,
				libraryCardComponent: libraryCardComponent,
				selectedItemsComponent: selectedItemsComponent,
				topBarComponent: topBarComponent,
				sortProperty: sortProperty,
				sortAscending: sortAscending,
				acceptedTypes: acceptedTypes,
				defaultSelectedItemIds: filterDefaultSelected.map((item) => item._id),
			}}
		>
			<div
				className="react-media-library"
				onClick={handleModalOnClick}
			>
				<div className="react-media-library__modal">
					<div className="react-media-library__modal__header">
						<h2 className="react-media-library__modal__header__title">
							{ translate ? translate.titleModal : modalTitle } 
						</h2>
						<div className="react-media-library__modal__header__close">
							<button
								type="button"
								onClick={onClose}
							>
								<span className="icon-close"/>
							</button>
						</div>
					</div>
					<div className="react-media-library__modal__body">
						<ReactMediaLibraryTabs />
					</div>
				</div>
			</div>
		</ReactMediaLibraryContext.Provider>
	);
};

export default ReactMediaLibrary;


