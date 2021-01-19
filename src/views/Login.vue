<template>
  <div class="about">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
       <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" type="password"></el-input>
      </el-form-item>
      <el-form-item >
        <el-button type="primary" @click="submitForm()">立即创建</el-button>
      </el-form-item>
      <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          password:'',
        },
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
          ],
           password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm() {
        let {name,password} =this.ruleForm;
        if(name == 'admin' && password =='admin'){
            sessionStorage.setItem('username',name);//本地的缓存
            this.$router.push('./home');
        }else{
          alert('姓名和密码不匹配')
        }

      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>