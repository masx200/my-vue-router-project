<template>
    <div>
        <p>
            testname:
            <input class="form-control" v-model="testname" />
        </p>
        <button
            class="btn btn-outline-success btn-lg"
            v-on:click="changevalue()"
        >
            修改testname
        </button>
    </div>
</template>
<script src="./bindglobalstore-testname.js"></script>
