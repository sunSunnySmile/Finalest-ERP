<template>
    <div class="store-data-wrapper">
        <el-row class="fs14">
            <el-col :span='4' class="bg-white h30 pl10">
                <el-row>
                    <el-col :span="8">
                        <span class="fs14">店铺类型</span>
                    </el-col>
                    <el-col :span="15">
                        <el-select v-model="value" placeholder="请选择店铺类型">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>                    
            </el-col>

            <el-col :span='4' class="bg-white ml10 h30 pl10">
                <el-row>
                    <el-col :span="8">
                        <span class="fs14">所属组织</span>
                    </el-col>
                    <el-col :span="15">
                        <input class="input-need" type="text" placeholder="请录入所属组织"/>
                    </el-col>
                </el-row>                    
            </el-col>

            <el-col :span='4' class="bg-white ml10 h30 pl10">
                <el-row>
                    <el-col :span="8">
                        <span class="fs14">行政地区</span>
                    </el-col>
                    <el-col :span="15">
                        <el-select v-model="value" placeholder="请选择行政地区">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>                    
            </el-col>

            <el-col :span='4' class="bg-white ml10 h30 pl10">
                <el-row>
                    <el-col :span="8">
                        <span class="fs14">业务地区</span>
                    </el-col>
                    <el-col :span="15">
                        <el-select v-model="value" placeholder="无">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>                    
            </el-col>

            <el-col :span='2' class="h30 ml10">
                <span class="btn">查询</span>
            </el-col>

            <el-col :span="1" class="h30" :offset="3" style='cursor:pointer'>
                <span @click="ifShow = !ifShow">收起</span>
                <i class="el-icon-arrow-down" @click="ifShow = !ifShow"></i>
            </el-col>
        </el-row>

        <el-collapse-transition>
            <div v-show="ifShow">
                <el-row>
                    <el-col :span='4' class="bg-white h30 pl10 mt10">
                        <el-row>
                            <el-col :span="8">
                                <span class="fs14">编码</span>
                            </el-col>
                            <el-col :span="15">
                                <input class="input-need" type="text" placeholder="PO-959894848"/>
                            </el-col>
                        </el-row>                    
                    </el-col>

                    <el-col :span='4' class="bg-white ml10 h30 pl10 mt10">
                        <el-row>
                            <el-col :span="8">
                                <span class="fs14">名称</span>
                            </el-col>
                            <el-col :span="15">
                                <input class="input-need" type="text" placeholder="请录入手工单号"/>
                            </el-col>
                        </el-row>                    
                    </el-col>

                    <el-col :span='4' class="bg-white ml10 h30 pl10 mt10">
                        <el-row>
                            <el-col :span="8">
                                <span class="fs14">客户性质</span>
                            </el-col>
                            <el-col :span="15">
                                <el-select v-model="value" placeholder="请选择客户性质">
                                    <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-col>
                        </el-row>                    
                    </el-col>
                </el-row>
            </div>
        </el-collapse-transition>

        <el-row class="mt20 bg-white pt10 pb10 bb1">
            <el-col :span='2' class="ml10">
                <span class="btn">新增</span>
            </el-col>

            <el-col :span='2' class="ml10">
                <span class="btn">修改</span>
            </el-col>

            <el-col :span='2' class="ml10">
                <span class="btn">删除</span>
            </el-col>

            <el-col :span='2' class="ml10">
                <span class="btn">辅助功能</span>
            </el-col>

            <el-col :span='2' :offset="10">
                <span class="rbtn">打印</span>
            </el-col>

            <el-col :span='2' class="ml10">
                <span class="rbtn">Excel</span>
            </el-col>
        </el-row>

        <el-row class="bg-white pl10 pt10 pr10 pb10">
            <el-col :span="24">
                <el-table :data="tableData" border style="width: 100%" stripe>
                    <el-table-column prop="operation" label="操作" ></el-table-column>
                    <el-table-column prop="organization" label="所属组织" ></el-table-column>
                    <el-table-column prop="storeCode" label="店铺编码"></el-table-column>
                    <el-table-column prop="storeName" label="店铺名称"></el-table-column>
                    <el-table-column prop="storeCall" label="店铺简称"></el-table-column>
                    <el-table-column prop="storeType" label="店铺类型"></el-table-column>
                    <el-table-column prop="storeNature" label="店铺性质"></el-table-column>
                    <el-table-column prop="area" label="业务地区"></el-table-column>     
                    <el-table-column prop="wareHouse" label="对应仓库"></el-table-column>
                    <el-table-column prop="ifAllow" label="允许使用">
                        <template slot-scope="scope">
                            <el-checkbox v-model="tableData[scope.$index].ifAllow" ></el-checkbox>
                        </template>
                    </el-table-column>
              </el-table> 
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default{
    name:'storeData',
    data(){
        return {
            ifShow:true,
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
				organization: '组织',
				operation: '操作',
				storeCode: '店铺编码',
                storeName:'店铺名称',
                storeCall:'店铺简称',
                storeType:'店铺类型',
                area:'业务地区',
                wareHouse:'对应仓库',
                storeNature:'店铺性质',
                ifAllow:true,
				}, {
				    organization: '组织',
                    operation: '操作',
                    storeCode: '店铺编码',
                    storeName:'店铺名称',
                    storeCall:'店铺简称',
                    storeType:'店铺类型',
                    area:'业务地区',
                    wareHouse:'对应仓库',
                    storeNature:'店铺性质',
                    ifAllow:true,
				}, {
				    organization: '组织',
                    operation: '操作',
                    storeCode: '店铺编码',
                    storeName:'店铺名称',
                    storeCall:'店铺简称',
                    storeType:'店铺类型',
                    area:'业务地区',
                    wareHouse:'对应仓库',
                    storeNature:'店铺性质',
                    ifAllow:true,
				}, {
				    organization: '组织',
                    operation: '操作',
                    storeCode: '店铺编码',
                    storeName:'店铺名称',
                    storeCall:'店铺简称',
                    storeType:'店铺类型',
                    area:'业务地区',
                    wareHouse:'对应仓库',
                    storeNature:'店铺性质',
                    ifAllow:true,
				}, {
				    organization: '组织',
                    operation: '操作',
                    storeCode: '店铺编码',
                    storeName:'店铺名称',
                    storeCall:'店铺简称',
                    storeType:'店铺类型',
                    area:'业务地区',
                    wareHouse:'对应仓库',
                    storeNature:'店铺性质',
                    ifAllow:true,
				}, {
				    organization: '组织',
                    operation: '操作',
                    storeCode: '店铺编码',
                    storeName:'店铺名称',
                    storeCall:'店铺简称',
                    storeType:'店铺类型',
                    area:'业务地区',
                    wareHouse:'对应仓库',
                    storeNature:'店铺性质',
                    ifAllow:true,
				}, {
				    organization: '组织',
                    operation: '操作',
                    storeCode: '店铺编码',
                    storeName:'店铺名称',
                    storeCall:'店铺简称',
                    storeType:'店铺类型',
                    area:'业务地区',
                    wareHouse:'对应仓库',
                    storeNature:'店铺性质',
                    ifAllow:true,
				}, {
				    organization: '组织',
                    operation: '操作',
                    storeCode: '店铺编码',
                    storeName:'店铺名称',
                    storeCall:'店铺简称',
                    storeType:'店铺类型',
                    area:'业务地区',
                    wareHouse:'对应仓库',
                    storeNature:'店铺性质',
                    ifAllow:true,
				}, {
				    organization: '组织',
                    operation: '操作',
                    storeCode: '店铺编码',
                    storeName:'店铺名称',
                    storeCall:'店铺简称',
                    storeType:'店铺类型',
                    area:'业务地区',
                    wareHouse:'对应仓库',
                    storeNature:'店铺性质',
                    ifAllow:true,
				}],
        }
    },
}    
</script>

<style>
.store-data-wrapper{
    width: 100%;
    height: auto;
    background: rgba(238, 241, 245, 1);
}
.bg-white{
    background: white;
    border-radius: 3px;
}
.input-need{
    outline: none;
    border:none;
    width: 100%;
}
.mt10{
    margin-top: 10px;
}
.mt20{
    margin-top: 20px;
}
.ml10{
    margin-left: 10px;
}
.pl10{
    padding-left: 10px;
}
.pt10{
    padding-top: 10px;
}
.pt20{
    padding-top: 20px;
}
.pb10{
    padding-bottom: 10px;
}
.pr10{
    padding-right: 10px;
}
.h30{
    height: 32px;
    line-height: 32px;
}
.fs14{
    font-size: 14px;
    color: rgba(0, 0, 0, 0.349019607843137);
}
.btn{
    display: inline-block;
    width: 100%;
    text-align: center;
    height: 30px;
    line-height: 30px;
    background: rgba(130, 170, 252, 1);
    color: white;
    border-radius: 3px;
    cursor: pointer;
}
.rbtn{
    display: inline-block;
    width: 100%;
    text-align: center;
    height: 30px;
    line-height: 30px;
    background: rgba(242, 242, 242, 1);
    border-radius: 3px;
    cursor: pointer;
}
.bb1{
    border-bottom: 1px solid rgba(242, 242, 242, 1);
}
</style>
<style>
.store-data-wrapper .el-input input{
    border:none;
    height: 30px;
    line-height: 30px;
    padding-left: 0;
}
/* 重写checkbox */
.store-data-wrapper .el-checkbox__inner{
    width: 24px;
    height: 24px;
}
.store-data-wrapper .el-checkbox__inner::after{
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    content: "";
    border: 3px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 11px;
    left: 6px;
    position: absolute;
    top: 1px;
    -webkit-transform: rotate(45deg) scaleY(0);
    transform: rotate(45deg) scaleY(0);
    width: 6px;
    -webkit-transition: -webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    transition: -webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    transition: transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    transition: transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms,-webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    -webkit-transform-origin: center;
    transform-origin: center;
}

/* 重写el-table样式 */
.store-data-wrapper .el-table th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
}
.store-data-wrapper .el-table td{
    padding: 3px 0;
}
.store-data-wrapper .el-table__body{
    text-align: center;
}
/* 重写el-pagination样式 */
</style>
