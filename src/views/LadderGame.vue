<template>
  <div class="container">
    <div class="participants">
      <div
        v-for="(participant, index) in participants"
        :key="index"
        class="participant"
      >
        <input
          type="text"
          v-model="participant.name"
          placeholder="참가자 이름"
        />
        <button @click="removeParticipant(index)">삭제</button>
      </div>
      <div class="add-participant">
        <input
          type="text"
          v-model="newParticipant"
          placeholder="새로운 참가자"
        />
        <button @click="addParticipant">추가</button>
      </div>
    </div>
    <div class="ladder">
      <div class="ladder-bars">
        <div v-for="index in barCount" :key="index" class="ladder-bar"></div>
      </div>
      <div class="ladder-names">
        <div
          v-for="(participant, index) in participants"
          :key="index"
          class="ladder-name"
        >
          {{ participant.name }}
        </div>
      </div>
      <div class="ladder-arrows">
        <div v-for="index in barCount" :key="index" class="ladder-arrow"></div>
      </div>
    </div>
    <div class="result">
      <button @click="showResult">랜덤 위치</button>
      <div class="result-name">{{ resultName }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      participants: [{ name: "" }],
      newParticipant: "",
      barCount: 5,
      resultName: "",
    };
  },
  methods: {
    addParticipant() {
      if (this.newParticipant.trim()) {
        this.participants.push({ name: this.newParticipant.trim() });
        this.newParticipant = "";
      }
    },
    removeParticipant(index) {
      this.participants.splice(index, 1);
    },
    showResult() {
      const index = Math.floor(Math.random() * this.participants.length);
      this.resultName = this.participants[index].name;
    },
  },
};
</script>
<style scoped>
.ladder {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.bar {
  width: 30px;
  height: 10px;
  margin-right: 10px;
  border: 1px solid black;
}

.selected {
  background-color: black;
}

.participants {
  margin-bottom: 20px;
}

.participants div {
  margin-bottom: 10px;
}

.participants label {
  display: inline-block;
  width: 120px;
}

.participants input {
  width: 200px;
}

.participants button {
  margin-left: 10px;
}

.buttons {
  margin-bottom: 20px;
}

.buttons button {
  margin-right: 10px;
}

.result {
  font-size: 24px;
  font-weight: bold;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  margin: 3rem auto;
}

.participants {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.participant {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.participant input[type="text"] {
  padding: 0.5rem;
  margin-right: 0.5rem;
}

.add-participant {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.add-participant input[type="text"] {
  padding: 0.5rem;
  margin-right: 0.5rem;
}

.ladder {
  display: flex;
  margin-bottom: 2rem;
}

.ladder-bars {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 1rem;
}

.ladder-bar {
  width: 1.5rem;
  height: 4rem;
  background-color: #888;
  border-radius: 0.5rem;
  transition: all 0.5s ease;
}

.ladder-names {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 1rem;
}

.ladder-name {
  font-weight: bold;
  transition: all 0.5s ease;
}

.ladder-arrows {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.ladder-arrow {
  width: 0;
  height: 0;
  border-top: 2rem solid transparent;
  border-bottom: 2rem solid transparent;
  border-right: 1.5rem solid #888;
  transition: all 0.5s ease;
}

.result {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.result button {
  padding: 0.5rem;
  margin-bottom: 1rem;
}

.result-name {
  font-size: 2rem;
  font-weight: bold;
  transition: all 0.5s ease;
  transform: translateX(-100%);
}
</style>
