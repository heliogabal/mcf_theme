<div class="headwrap">
  <header class="l-header" role="banner">
    <div class="l-languages">
        <?php print render($page['header']); ?>
    </div>
    <div class="l-branding">
      <?php if ($logo): ?>
        <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="site-logo"><img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" /></a>
      <?php endif; ?>

      <?php if ($site_name || $site_slogan): ?>
        <?php if ($site_name): ?>
          <h1 class="site-name">
            <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><span><?php print $site_name; ?></span></a>
          </h1>
        <?php endif; ?>

        <?php if ($site_slogan): ?>
          <h2 class="site-slogan"><?php print $site_slogan; ?></h2>
        <?php endif; ?>
      <?php endif; ?>
    </div>
    <div class="petob">
      <?php print render($page['petob']); ?>
    </div>
    <?php print render($page['navigation']); ?>
  </header>
</div>
<div class="l-page">
  <div class="l-main">
      <?php print render($page['slideshow']); ?>
      <?php print render($page['sidebar_first']); ?>
    <div class="l-content" role="main">
      <?php print render($page['highlighted']); ?>
      <!--<?php print $breadcrumb; ?>-->
      <a id="main-content"></a>
      <?php print render($title_prefix); ?>
      <?php if ($title): ?>
        <h1><?php print $title; ?></h1>
      <?php endif; ?>
      <?php print render($title_suffix); ?>
      <?php print $messages; ?>
      <?php print render($tabs); ?>
      <?php print render($page['help']); ?>
      <?php if ($action_links): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      <?php print render($page['content']); ?>
      <!--<?php print $feed_icons; ?>-->
    </div>
    <?php print render($page['sidebar_second']); ?>
  </div>
  <div class="l-bottom" role="bottom">
    <?php print render($page['bottom_left']); ?>
    <?php print render($page['bottom_right']); ?>
  </div>
</div>
<div class="footwrap">
  <footer class="l-footer" role="contentinfo">
    <?php print render($page['footer_left']); ?>
    <?php print render($page['footer_right']); ?>
    <?php print render($page['footer_bottom']); ?>
  </footer>
</div>
