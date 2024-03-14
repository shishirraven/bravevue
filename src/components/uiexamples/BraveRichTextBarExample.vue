<template>
  <div id="app">
    <div contenteditable="true" class="prose p-10 dark:prose-invert">
    <!-- RICHTEXT TOOLBAR -->
    <ToolbarLink contenteditable="false" ref="linkToolBar" />
    <ToolBarRich
      contenteditable="false"
      @show-link-toolbar="$refs.linkToolBar.showToolBar()"
    />
    <ToolbarPreviewLink
      contenteditable="false"
      @show-link-toolbar="$refs.linkToolBar.showToolBar()"
    />

    Hello Mister
  </div>
</div>
</template>