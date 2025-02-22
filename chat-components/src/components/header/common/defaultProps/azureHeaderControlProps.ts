import { IHeaderControlProps } from "../../interfaces/IHeaderControlProps";
import chatIcon from "../../../../assets/imgs/chatIcon.svg";

export const azureHeaderControlProps: IHeaderControlProps = {
    id: "oc-lcw-header",
    hideIcon: false,
    hideTitle: true,
    hideCloseButton: false,
    hideMinimizeButton: true,
    onMinimizeClick: function () { console.log("minimize clicked"); },
    onCloseClick: function () { console.log("close clicked"); },
    middleGroup: { children: [] },
    leftGroup: { children: [] },
    rightGroup: { children: [] },
    minimizeButtonProps: {
        id: "oc-lcw-header-minimizebutton",
        type: "icon"
    },
    closeButtonProps: {
        id: "oc-lcw-header-closebutton",
        type: "text",
        text: "End Chat"
    },
    headerIconProps: {
        id: "oc-lcw-header-icon",
        src: chatIcon,
        alt: "Chat Icon"
    },
    headerTitleProps: {
        id: "oc-lcw-header-title",
        text: "Azure Chat Support"
    }
};