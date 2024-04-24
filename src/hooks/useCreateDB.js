import db from "../data/db.json"
import dbProf from "../data/dbProf.json"

export const useCreateDB = (arr, arrProf) => {

    if(!arr){
        arr = db
    }
    if(!arrProf){
        arrProf = dbProf
    }

    function getSavedData(){

        let postsData = localStorage.getItem("post_personal")
        postsData = JSON.parse(postsData)
        if(postsData === null){
            return arr
        } else {
            return postsData
        }
    }

    function getSavedDataProf(){

        let postsData = localStorage.getItem("post_professional")
        postsData = JSON.parse(postsData)
        if(postsData === null){
            return arrProf
        } else {
            return postsData
        }
    }

    function getSavedData_Eng(){

        let postsData = localStorage.getItem("post_personal_eng")
        postsData = JSON.parse(postsData)
        if(postsData === null){
            return arr
        } else {
            return postsData
        }
    }

    function getSavedDataProf_Eng(){

        let postsData = localStorage.getItem("post_professional_eng")
        postsData = JSON.parse(postsData)
        if(postsData === null){
            return arrProf
        } else {
            return postsData
        }
    }

    let arrPosts = getSavedData()
    let arrPosts_eng = getSavedData_Eng()
    let arrPostsProf = getSavedDataProf()
    let arrPostsProf_eng = getSavedDataProf_Eng()

    function setNewData(_arr){
        localStorage.setItem(_arr, JSON.stringify(arrPosts))
    }

    function setNewData_eng(_arr){
        localStorage.setItem(_arr, JSON.stringify(arrPosts_eng))
    }

    function setNewDataProf(_arr){
        localStorage.setItem(_arr, JSON.stringify(arrPostsProf))
    }

    function setNewDataProf_eng(_arr){
        localStorage.setItem(_arr, JSON.stringify(arrPostsProf_eng))
    }

    setNewData("post_personal")
    setNewData_eng("post_personal_eng")
    setNewDataProf("post_professional")
    setNewDataProf_eng("post_professional_eng")

    arr = localStorage.getItem("post_personal")
    arr = JSON.parse(arr)

    return {arr};
};