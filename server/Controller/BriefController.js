import Briefs from '../model/BriefModel'
class BriefController{
    async getBrief(ctx){
        ctx.body=await Briefs.getBrief()
    }
    async updateBrief(ctx){
        const id=ctx.params.id
        const content=ctx.request.body.content
        ctx.body=await Briefs.updateBrief(id,content)
    }
}
export default new BriefController()
