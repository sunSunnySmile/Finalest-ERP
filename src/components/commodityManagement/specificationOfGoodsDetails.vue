<template>
    <div class="group-management-wrapper">
        <el-row >
            <el-col :span='24'>
                <div class="bg-white">
                    <btm :date="bottonbox" > </btm>
                    <textbox :data="textboxipt"></textbox>  
                </div>
                <div class="mt10 pb10" style="background:rgb(249,249,249)">
                    <el-row class="bm-pd10">
                            <el-col :span="12">
                                <span class="shop-title">
                                    商品规格
                                </span>
                            </el-col>
                            <el-col :span="12" >
                                <span class="shop-sq" @click="ifShow = !ifShow" >收起<i class="el-icon-arrow-down" @click="ifShow = !ifShow" :class="{rotate : !ifShow}" style="width:15px;height:15px;margin-left:10px;color:#888;"></i></span>
                            </el-col>
                    </el-row>
                    <el-collapse-transition>
                        <div v-show="ifShow">
                        <el-row class="pl10 pr10 pb10">
                            <el-col :span="12">
                                <div class="left">  
                                    <el-button type="success"><i class="el-icon-plus" style="margin-right:5px;"></i>选取</el-button>
                                </div> 
                            </el-col>
                            <el-col :xl="6" :lg="8" :md="10" :sm="11" :xs="11" style="float:right">
                                <div class="right">
                                    <el-input placeholder="" v-model="input4">
                                    <template slot="append">查询</template>
                                  </el-input> 
                                </div>
                            </el-col>
                        </el-row>
                        <div >
                            <el-table :data="tableData" border style="width: 100%" class="text-center ">
                            <el-table-column prop="sequenceNumber" label="序号" width="60">
                            </el-table-column>
                            <el-table-column prop="AttributeEncoding" label="编码">
                            </el-table-column>
                            <el-table-column prop="attributeName" label="名称">
                            </el-table-column>
                            <el-table-column prop="startUsing" label="备注">
                                <template scope="scope">
                                    <el-checkbox  ></el-checkbox>
                                </template>
                            </el-table-column>
                          </el-table> 
                        </div>
                        </div>
                    </el-collapse-transition>
                </div>
                <el-row class="pl10 pr10 pt10 pb10" style="background-color:#fff">
                    <el-col :span="24" style="margin-bottom:30px;">
                        <h4>审计信息</h4>
                    </el-col>
                    <textbox :data="textboxipt1"></textbox>
                </el-row>
            </el-col>
        </el-row>  
    </div>
</template>

<script>
import Btm from '../../base/btm/btm'
import Textbox from '../../base/textbox/textbox'
    export default{
        name:'customerInfor',
        data(){
            return{
                ifShow:true,
                ifShow1:true,
                input4:'',
                radio:'1',
                textboxipt1:[{
                    must: '',
                    title: '创建人',
                    place: ''                
                },{
                    must: '',
                    title: '创建时间',
                    place: ''                 
                },{
                    must: '',
                    title: '修改人',
                    place: ''                                
                },{
                    must: '',
                    title: '修改时间',
                    place: ''                 
                }],
                bottonbox:{
                    url: '/specification/specificationOfGoodsList',
                   botton:[{
                    class: 'erp_bt bt_back',
                    imgsrc: '../../../static/image/common/bt_back.png',
                    text: '返回'
                },{
                    class: 'erp_bt bt_modify',
                    imgsrc: '../../../static/image/common/bt_modify.png',
                    text: '修改'
                },{
                    class: 'erp_bt bt_save',
                    imgsrc: '../../../static/image/common/bt_save.png',
                    text: '保存'
                },{
                    class: 'erp_bt bt_save_add',
                    imgsrc: '../../../static/image/common/bt_save_add.png',
                    text: '保存并新增'
                },{
                    class: 'erp_bt bt_add',
                    imgsrc: '../../../static/image/common/bt_add.png',
                    text: '新增'
                },{
                    class: 'erp_bt bt_del',
                    imgsrc: '../../../static/image/common/bt_del.png',
                    text: '删除'
                },{
                    class: 'erp_bt bt_version',
                    imgsrc: '../../../static/image/common/bt_start.png',
                    text: '启用'
                }]},
                textboxipt:[{
                    must: '*',
                    title: '规格组编码',
                    place: ''                
                },{
                    must: '*',
                    title: '规格组名称',
                    place: ''                 
                },{
                    must: '*',
                    title: '类目',
                    place: ''                 
                },{
                    must: '*',
                    title: '状态',
                    options:[{
                    value: '选项1',
                    label: '仓库'
                    }, {
                    value: '选项2',
                    label: '地址'
                    }, {
                    value: '选项3',
                    label: '总部'
                    }, {
                    value: '选项4',
                    label: '总部2'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                    }]                
                },{
                    must: '',
                    title: '备注',
                    place: '1223'                 
                }],
                options: [{
                    value: '选项1',
                    label: '仓库'
                    }, {
                    value: '选项2',
                    label: '地址'
                    }, {
                    value: '选项3',
                    label: '总部'
                    }, {
                    value: '选项4',
                    label: '总部2'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                    }],
                    value: '',
                    tableData: [{
                      sequenceNumber: '1',
                      AttributeEncoding: '01',
                      attributeName: '类别',
                      startUsing: '',
                      sequenceNumber1: '1',
                      AttributeEncoding1: 'color',
                      attributeName1: '颜色',

                    }, {
                      sequenceNumber: '2',
                      AttributeEncoding: '02',
                      attributeName: '系列',
                      startUsing: '',
                      sequenceNumber1: '2',
                      AttributeEncoding1: 'size',
                      attributeName1: '尺码',

                    }, {
                      sequenceNumber: '3',
                      AttributeEncoding: '03',
                      attributeName: '项目',
                      startUsing: '',
                      sequenceNumber1: '3',
                      AttributeEncoding1: 'spec',
                      attributeName1: '型号',

                    }],
            }
        },
        methods:{
            back(e){
                this.$store.state.url='/specification/specificationOfGoodsList/default'
               this.$router.push({path:this.$store.state.url})//点击切换路由
            },
        },
        components:{
            Btm,
            Textbox
        }
 }   
</script>

<style scoped>
.bg-white{
    background: white;
    border-radius: 3px;
}
.pl10{
    padding-left: 10px;
}
.pl15{
    padding-left: 15px;
}
.pt10{
    padding-top: 10px;
}
.pb10{
    padding-bottom: 10px;
}
.pr10{
    padding-right: 10px;
}
.border-left{
    border-left: 1px solid #E4E4E4;
}

</style>

<style>
.el-button--success{
    background-color: rgb(51,204,204); 
    padding: 7px 10px;
    border-color: rgb(51,204,204);
}
.el-checkbox__inner{
    width: 16px;
    height: 16px;
    background: #f4f4f5;
}
.el-checkbox__inner::after{
    left: 4px;
    top: -2px;
}
.el-input__inner{
    
    height: 30px;
}
.el-input-group__append{
    background-color: rgb(51,204,204);
    color: #fff;
    cursor: pointer;
    border-color: rgb(51,204,204);
}
.bm-pd10{
    border-bottom: 1px solid #e4e4e4;
    margin: 10px 0;
}
.shop-sq{
    float: right;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    color: #000;
    cursor: pointer;
}
.shop-title{
        float: left;
    height: 40px;
    line-height: 40px;
    margin: 0;
    cursor: pointer;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 3px solid rgb(51,204,204);
    color: #000;
    padding: 0 20px;
}
</style>