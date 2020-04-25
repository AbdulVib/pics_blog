export const initialState = {
    photoData: [
        {
            id: 0,
            description: "beautiful landscape",
            imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                "3919321_1443393332_n.jpg"
        }, {
            id: 1,
            description: "Aliens...",
            imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
                "08323785_735653395_n.jpg"
        }, {
            id: 2,
            description: "On a vacation!",
            imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
        }
    ],

    currentPhoto: {},
    commentedPhotos: []
};


const reducer = (state, action) => {
    switch (action.type) {

        case 'SET_CURRENT_TODO':
            return {
                ...state,
                currentPhoto: action.payload
            }
        case 'UPDATE_TODO':
            const updatedTodo = { ...state.currentPhoto, comment: action.payload }
            const updatedTodoIndex = state.photoData.findIndex( t => t.id === state.currentPhoto.id )
            // console.log('updatedddddd', updatedTodo)
            const updatedTodos = [
                ...state.photoData.slice(0, updatedTodoIndex),
                updatedTodo,
                ...state.photoData.slice(updatedTodoIndex + 1)
            ]
            return {
                ...state,
                currentPhoto: {},
                commentedPhotos: [...state.commentedPhotos, {...updatedTodo, id: Math.random()} ],
                photoData: updatedTodos
            }

        case 'ADD':
            return {
                ...state,
                photoData: [ action.payload, ...state.photoData]
            }

        case 'DELETE':
            return {
                ...state,
                photoData: action.payload
            }
        default:
            return state
    }
}

export default reducer
