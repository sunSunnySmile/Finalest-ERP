<template>
    <div class="group-management-wrapper">
        <el-row class="bg-white">
            <el-col :span='24' class="border-left">
                <btm :date="bottonbox" v-on:listbtm="btmlog"></btm>
                <textbox :data="textboxipt"></textbox>
                <el-row class="pl10 pr10">
                </el-row>
                <el-row class="pl10  pr10">
                </el-row>
                <el-row class="pl10 pr10">
                    <el-col :xl="2" :lg="2" :md="4" :sm="5" :xs="6" style="margin-left:80px">               
                        <div class="bgcolor smallBgcolor">
                            <el-checkbox  >系统属性</el-checkbox>
                        </div>
                    </el-col>
                    <el-col :xl="2" :lg="2" :md="4" :sm="5" :xs="6">
                        <div class="bgcolor smallBgcolor">
                            <el-checkbox  >必填</el-checkbox>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="pl10 pr10 pt10" style="border-top:1px solid #e4e4e4;   ">
                    <el-col :span="24">
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
                bottonbox:{
                    url: '/commercial/commercialSpecification',
                   botton:[{
                    class: 'erp_bt bt_back',
                    imgsrc: '../../../static/image/common/bt_back.png',
                    text: '返回'
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
                    class: 'erp_bt bt_auxiliary',
                    imgsrc: '../../../static/image/common/bt_audit.png',
                    text: '审核'
                }]},
                textboxipt:[{
                    must: '*',
                    title: '属性编码',
                    place: ''                
                },{
                    must: '*',
                    title: '属性名称',
                    place: ''                 
                },{
                    must: '',
                    title: '控件类型',
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
                    must: '*',
                    title: '显示顺序',
                    place: ''                 
                },{
                    must: '',
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
                }],
                value: '',
            }
        },
        methods:{
            btmlog:function(data){
                
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
.pt10{
    padding-top: 10px;
}
.pb10{
    padding-bottom: 10px;
}
.pr10{
    padding-right: 10px;
}
</style>

<style>
.el-checkbox__inner{
    width: 16px;
    height: 16px;
    background: #f4f4f5;
}
.el-checkbox__inner::after{
    left: 4px;
    top: -2px;
}
</style>