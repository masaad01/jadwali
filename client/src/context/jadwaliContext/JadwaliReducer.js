  const JadwaliReducer = (state, action) => {
    switch (action.type) {
        case "SET_MIN": return {
            ...state, minNumberOfDays: action.payload
        }
        case "SET_START_TIME": return {
            ...state, startTime: action.payload
        }
        case "SET_END_TIME": return {
            ...state, endTime: action.payload
        }
        case "SET_GEN": return {
            ...state, generatedSchedules: action.payload
        }
        case "SET_REG": return {
            ...state, registeredCourses: action.payload
        }
        case "SET_DAYS": return {
            ...state, days: action.payload
        }
        case "SET_ACTIVE_TAB":return{
            ...state, activeTab: action.payload
        }
        case "SET_LOADING":return{
            ...state, loading: action.payload
        }
        case "SET_INTENSIVE_SECTIONS":return{
            ...state, intensiveSections: action.payload
        }
        case "SET_ACTIVE_SCHEDULE":return{
            ...state, activeSchedule: action.payload
        }
        case "SET_FAVORITE_SCHEDULES":return{
            ...state, favoriteSchedules: action.payload
        }
        case "SET_FAVORITE_COURSES":return{
            ...state, favoriteCourses: action.payload
        }
        case "SET_DEPARTMENT":return{
            ...state, selectedDepartment: action.payload
        }
        case "SET_GEN_AVAL":return{
            ...state, availableSchedules: action.payload,activeSchedule:0
        }
        case "SET_SHOW_ALL":return{
            ...state, showAll: action.payload,activeSchedule:0
        }
        case 'SET_PINNED_SECTIONS':return{
            ...state, pinnedSections: action.payload,activeSchedule:0
        }
        default:;
       
    }
}
export default JadwaliReducer