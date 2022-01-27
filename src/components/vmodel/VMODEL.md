# v-model
### 기본 동작 원리
- `v-bind` html요소 연결 <br/>
- `v-on` 뷰 인스턴스 로직 연결 <br/>
- 메서드 함수의 첫번째 인자는 `event`가 들어옴

### html 입력 태그별 v-model 속성
vue2에서는 아래와 같다.
- input - value/input
- checkbox - checked /change
- select value / change

```
<!-- BaseInput.vue - 싱글 파일 컴포넌트 구조-->
<template>
  <input v-bind:value="value" v-on:input="updateInput">
</template>

<script>
export default {
  props: ['value'],
  methods: {
    updateInput: function(event) {
      this.$emit('input', event.target.value);
    }
  }
}
</script>


<!-- App.vue - 싱글 파일 컴포넌트 구조 -->
<template>
  <div>
    <base-input v-model="inputText"></base-input>
  </div>
</template>

<script>
import BaseInput from './BaseInput.vue';

export default {
  components: {
    'base-input': BaseInput
  },
  data: function() {
    return {
      inputText: ''
    }
  }
}
</script>

```
vue3 는 아래와 같음
- :value => modelValue
- :input => update:modelValue
```
<!-- App.vue -->
<template>
  <div>
    <my-input v-model="inputText"></my-input>
  </div>
</template>

<script>
export default {
  data() {
    return { inputText: '' }
  }
}

<!-- MyInput.vue -->
<template>
  <input :value="modelValue" @input="onInput">
</template>

<script>
export default {
  props: ['modelValue'],
  methods: {
    onInput(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>
</script>

```

### 한번에 여러개 사용 가능
```<!-- App.vue -->
<template>
  <div>
    <user-profile 
      v-model:firstName="firstName"
      v-model:lastName="lastName"
    ></user-profile>
  </div>
</template>

<script>
export default {
  data() {
    return { 
      firstName: '',
      lastName: ''
    }
  }
}
</script>

<!-- UserProfile.vue -->
<template>
  <input :value="firstName" @input="$emit('update:firstName', $event.target.value)">
  <input :value="lastName" @input="$emit('update:lastName', $event.target.value)">
</template>

<script>
export default {
  props: ['firstName', 'lastName'],
}
</script>
```

