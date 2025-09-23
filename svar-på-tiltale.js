(function($) {

  function createSvarButton(commentElement) {
    var $comment = $(commentElement);

    if ($comment.find('.svar_button').length > 0) {
      return;
    }

    var $svarButton = $('<a href="#" class="svar_button" style="color: var(--color_888);">Svar&nbsp;</a>');

    $svarButton.on('click', function(e) {
      e.preventDefault();
      handleSvarClick($comment);
    });

    var $byline = $comment.find('.byline');
    if ($byline.length > 0) {
      var $kudosBlock = $byline.find('.kudos_block');
      if ($kudosBlock.length > 0) {
        $kudosBlock.before('<span style="color: var(--color_888);">&nbsp;|&nbsp;&nbsp;</span>').before($svarButton);
      }
    }
  }

  function handleSvarClick($comment) {
    var authorName = $comment.attr('data-creator-name');
    var commentId = $comment.attr('data-object-id');

    var selectedText = '';
    var selection = window.getSelection();
    if (selection.rangeCount > 0) {
      var range = selection.getRangeAt(0);
      var $bodyText = $comment.find('.body .text').first();
      
      if ($bodyText.length > 0 && $bodyText[0].contains(range.commonAncestorContainer)) {
        selectedText = selection.toString().trim();
      }
    }

    var commentBody = '';
    if (selectedText) {
      commentBody = selectedText;
    } else {
      var $bodyText = $comment.find('.body .text').first();
      commentBody = $bodyText.length > 0 ? $bodyText.text().trim() : '';
      if (commentBody.length > 140) {
        commentBody = commentBody.slice(0,140) + '…';
      }
    }

    var $textarea = $('#comment_body, textarea[name="comment[body]"], .comment_form textarea').first();

    if ($textarea.length === 0 || !authorName) {
      return;
    }

    var quotedContent = '';
    if (commentBody) {
      quotedContent = 'bq.. ' + commentBody + '\n\np. ';
    }

    var replyText = quotedContent + '@' + authorName + ': ';

    var currentContent = $textarea.val();
    var newContent;
    if (currentContent && currentContent.trim()) {
      newContent = currentContent + '\n\n' + replyText;
    } else {
      newContent = replyText;
    }

    $textarea.val(newContent);
    $textarea.focus();

    $textarea[0].scrollIntoView({ behavior: 'smooth', block: 'center' });

    var textareaElement = $textarea[0];
    if (textareaElement.setSelectionRange) {
      setTimeout(function() {
        textareaElement.setSelectionRange(newContent.length, newContent.length);
        textareaElement.dispatchEvent(new KeyboardEvent('keyup', {key: ' '}));
      }, 100);
    }
  }

  function processSvarButtons() {
    $('.comment[data-object-type="comment"][data-creator-name]').each(function() {
      createSvarButton(this);
    });
  }

  Underskog.onPageModification(function() {
    processSvarButtons();
  });

  $(document).ready(function() {
    processSvarButtons();
  });

})(jQuery);
