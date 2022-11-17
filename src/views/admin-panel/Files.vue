<template>
  <div>
    <Toast />

    <h5
      class="text-color text-xl text-center surface-ground px-1 py-3 md:px-2 lg:px-3 border-round"
    >
      UPLOAD FILES
    </h5>
    <FileUpload
      name="demo[]"
      url="https://www.primefaces.org/upload.php"
      @upload="onAdvancedUpload($event)"
      :multiple="true"
      accept="image/*"
      :maxFileSize="1000000"
    >
      <template #content>
        <ul v-if="uploadedFiles && uploadedFiles[0]">
          <li v-for="file of uploadedFiles[0]" :key="file">
            {{ file.name }} - {{ file.size }} bytes
          </li>
        </ul>
      </template>
      <template #empty>
        <p>Drag and drop files to here to upload.</p>
      </template>
    </FileUpload>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploadedFiles: [],
      files: [],
      totalSize: 0,
      totalSizePercent: 0,
    };
  },
  methods: {
    onRemoveTemplatingFile(file, onFileRemove, index) {
      onFileRemove(index);
      this.totalSize -= parseInt(this.formatSize(file.size));
      this.totalSizePercent = this.totalSize / 10;
    },
    onClearTemplatingUpload(clear) {
      clear();
      this.totalSize = 0;
      this.totalSizePercent = 0;
    },
    onSelectedFiles(event) {
      this.files = event.files;
      this.files.forEach(file => {
        this.totalSize += parseInt(this.formatSize(file.size));
      });
    },
    onAdvancedUpload() {
      this.$toast.add({
        severity: "info",
        summary: "Success",
        detail: "File Uploaded",
        life: 3000,
      });
    },
    uploadEvent(callback) {
      this.totalSizePercent = this.totalSize / 10;
      callback();
    },
    onTemplatedUpload() {
      this.totalSize = 0;
      this.totalSizePercent = 0;
      this.$toast.add({
        severity: "info",
        summary: "Success",
        detail: "File Uploaded",
        life: 3000,
      });
    },
    onUpload() {
      this.$toast.add({
        severity: "info",
        summary: "Success",
        detail: "File Uploaded",
        life: 3000,
      });
    },
    formatSize(bytes) {
      if (bytes === 0) {
        return "0 B";
      }

      let k = 1000,
        dm = 3,
        sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        i = Math.floor(Math.log(bytes) / Math.log(k));

      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep(.custom-progress-bar) {
  .p-progressbar-value {
    background-color: #f44336;
  }
}
</style>
