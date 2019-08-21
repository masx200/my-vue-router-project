<template>
  <div>
    <h2>美化javascript代码</h2>
    <h4>删除注释,并格式整理</h4>
    <div class="row">
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <div>
          <h3>源本代码</h3>
          <textarea />
        </div>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <div>
          <h3>美化代码</h3>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { input: "", output: "" };
  }
};
</script>