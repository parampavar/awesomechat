import {createSelector} from 'reselect'

const selectRaw = state=>state.message;

const selectFindLoading = createSelector(
    [selectRaw],
    (message) => message.findLoading
);

const selectGetImageListLoading = createSelector(
    [selectRaw],
    (message) => message.getImageListLoading
);

const selectGetFileListLoading = createSelector(
    [selectRaw],
    (message) => message.getFileListLoading
);


const selectRecord = createSelector([selectRaw], message=>message.record);

const selectMessages = createSelector([selectRaw], message=> message.messages)

const selectInputMessage = createSelector(
    [selectRaw],
    message => message.inputMesage
);

const selectRightSidebarVisible = createSelector(
    [selectRaw],
    (message) => message.rightSidebarVisible
);

const selectTyping = createSelector(
    [selectRaw],
    message => message.typing
)

const selectImageList = createSelector(
    [selectRaw],
    (message) => message.imageList
);

const selectFileList = createSelector(
    [selectRaw],
    (message) => message.fileList
);

const selectors = {
    selectFindLoading,
    selectRecord,
    selectMessages,
    selectInputMessage,
    selectRightSidebarVisible,
    selectTyping,
    selectImageList,
    selectFileList,
    selectGetImageListLoading,
    selectGetFileListLoading,
};

export default selectors;
