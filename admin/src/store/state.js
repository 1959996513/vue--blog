import  {getToken,setToken,removeToken} from "@/utils/auth";

const state = {
//  全局变量
  token:getToken(),
  username:'',
  id:'',//正在编辑文章的Id
  title:'',//编辑文章的标题
  tags:'',//编辑文章的标签列表
  content:'',//编辑文章内容
  isPublished:'',//文章是否发布
  toggleDelete:''//是否删除
}
export default  state
