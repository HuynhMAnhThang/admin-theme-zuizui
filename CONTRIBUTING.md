# Contributing to ng-alain

We would love for you to contribute to ng-alain and help make it even better than it is
today! As a contributor, here are the guidelines we would like you to follow:

 - [Issues and Bugs](#issue)
 - [Feature Requests](#feature)
 - [Submission Guidelines](#submit)
 - [Coding Rules](#rules)
 - [Commit Message Guidelines](#commit)

## <a name="issue"></a> Found a Bug?
If you find a bug in the source code, you can help us by
[submitting an issue](#submit-issue) to our [GitHub Repository][github]. Even better, you can
[submit a Pull Request](#submit-pr) with a fix.

## <a name="feature"></a> Missing a Feature?
You can *request* a new feature by [submitting an issue](#submit-issue) to our GitHub
Repository. If you would like to *implement* a new feature, please submit an issue with
a  for your work first, to be sure that we can use it.
Please consider what kind of change it is:

* For a **Major Feature**, first open an issue and outline your proposal so that it can be
discussed. This will also allow us to better coordinate our efforts, prevent duplication of work,
and help you to craft the change so that it is successfully accepted into the project.
* **Small Features** can be crafted and directly [submitted as a Pull Request](#submit-pr).

## <a name="submit"></a> Submission Guidelines

### <a name="submit-issue"></a> Submitting an Issue

Before you submit an issue, please search the issue tracker, maybe an issue for your problem already exists and the discussion might inform you of workarounds readily available.

We want to fix all the issues as soon as possible, but before fixing a bug we need to reproduce and confirm it. In order to reproduce bugs we will systematically ask you to provide a minimal reproduction scenario using http://plnkr.co. Having a live, reproducible scenario gives us wealth of important information without going back & forth to you with additional questions like:

- version of ng-alain used
- 3rd-party libraries and their versions
- and most importantly - a use-case that fails

A minimal reproduce scenario using http://plnkr.co/ allows us to quickly confirm a bug (or point out coding problem) as well as confirm that we are fixing the right problem. If plunker is not a suitable way to demonstrate the problem (for example for issues related to our npm packaging), please create a standalone git repository demonstrating the problem.

We will be insisting on a minimal reproduce scenario in order to save maintainers time and ultimately be able to fix more bugs. Interestingly, from our experience users often find coding problems themselves while preparing a minimal plunk. We understand that sometimes it might be hard to extract essentials bits of code from a larger code-base but we really need to isolate the problem before we can fix it.

Unfortunately we are not able to investigate / fix bugs without a minimal reproduction, so if we don't hear back from you we are going to close an issue that don't have enough info to be reproduced.

You can file new issues by filling out our [new issue form](https://github.com/ng-alain/ng-alain/issues/new).


### <a name="submit-pr"></a> Submitting a Pull Request (PR)
Before you submit your Pull Request (PR) consider the following guidelines:

* Search [GitHub](https://github.com/ng-alain/ng-alain/pulls) for an open or closed PR
  that relates to your submission. You don't want to duplicate effort.
* Make your changes in a new git branch:

  ```shell
  git checkout -b my-fix-branch master
  ```

* Create your patch, **including appropriate test cases**.
* Follow our [Coding Rules](#rules).
* Run the full ng-alain test suite <!-- , as described in the [developer documentation][dev-doc] -->, and ensure that all tests pass.
* Commit your changes using a descriptive commit message that follows our
  [commit message conventions](#commit). Adherence to these conventions
  is necessary because release notes are automatically generated from these messages.

  ```shell
  git commit -a
  ```

  Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

* Push your branch to GitHub:

  ```shell
  git push origin my-fix-branch
  ```

* In GitHub, send a pull request to `ng-alain:master`.
* If we suggest changes then:
  * Make the required updates.
  * Re-run the ng-alain test suites to ensure tests are still passing.
  * Rebase your branch and force push to your GitHub repository (this will update your Pull Request):

  ```shell
  git rebase master -i
  git push -f
  ```

That's it! Thank you for your contribution!

#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes
from the main (upstream) repository:

* Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

  ```shell
  git push origin --delete my-fix-branch
  ```

* Check out the master branch:

  ```shell
  git checkout master -f
  ```

* Delete the local branch:

  ```shell
  git branch -D my-fix-branch
  ```

* Update your master with the latest upstream version:

  ```shell
  git pull --ff upstream master
  ```

## <a name="rules"></a> Coding Rules
To ensure consistency throughout the source code, keep these rules in mind as you are working:

* All features or bug fixes **must be tested** by one or more specs (unit-tests).
* All public API methods **must be documented**.

## <a name="commit"></a> Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted.  This leads to **more
readable messages** that are easy to follow when looking through the **project history**.  But also,
we use the git commit messages to **generate the ng-alain change log**.

### Commit Message Format
Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

Footer should contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/) if any.

Samples: (even more [samples](https://github.com/ng-alain/ng-alain/commits/master))

```
docs(changelog): update change log to beta.5
```

```
fix(release): need to depend on latest rxjs and zone.js

The version in our package.json gets copied to the one we publish, and users need the latest of these.
```

### Revert
If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type
Must be one of the following:

* **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **test**: Adding missing tests or correcting existing tests

### Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

### Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer
The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

A detailed explanation can be found in this [document][commit-message-format].

[commit-message-format]: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#
[github]: https://github.com/ng-alain/ng-alain
[plunker]: http://plnkr.co/edit


# Đóng góp cho ng-alain

Chúng tôi rất mong bạn đóng góp cho ng-alain và giúp làm cho nó tốt hơn
hôm nay! Với tư cách là người đóng góp, đây là các nguyên tắc mà chúng tôi muốn bạn làm theo:

 - [Sự cố và lỗi] (# sự cố)
 - [Yêu cầu tính năng] (# tính năng)
 - [Nguyên tắc đệ trình] (# đệ trình)
 - [Quy tắc mã hóa] (# quy tắc)
 - [Nguyên tắc thông báo cam kết] (# cam kết)

## <a name="issue"> </a> Tìm thấy lỗi?
Nếu bạn tìm thấy lỗi trong mã nguồn, bạn có thể giúp chúng tôi bằng cách
[gửi sự cố] (# submit-issue) tới [GitHub Repository] [github] của chúng tôi. Tốt hơn nữa, bạn có thể
[gửi Yêu cầu kéo] (# submit-pr) với một bản sửa lỗi.

## <a name="feature"> </a> Thiếu Tính năng?
Bạn có thể * yêu cầu * một tính năng mới bằng cách [gửi vấn đề] (# gửi vấn đề) tới GitHub của chúng tôi
Kho. Nếu bạn muốn * triển khai * một tính năng mới, vui lòng gửi vấn đề với
trước tiên cho công việc của bạn, để chắc chắn rằng chúng tôi có thể sử dụng nó.
Vui lòng xem xét loại thay đổi đó là:

* Đối với ** Tính năng chính **, trước tiên hãy mở một vấn đề và phác thảo đề xuất của bạn để nó có thể
thảo luận. Điều này cũng sẽ cho phép chúng tôi phối hợp tốt hơn các nỗ lực của mình, ngăn chặn sự trùng lặp công việc,
và giúp bạn soạn thảo thay đổi để nó được chấp nhận thành công vào dự án.
* ** Các tính năng nhỏ ** có thể được tạo và trực tiếp [gửi dưới dạng Yêu cầu kéo] (# submit-pr).

## <a name="submit"> </a> Nguyên tắc Gửi

### <a name="submit-issue"> </a> Gửi Vấn đề

Trước khi bạn gửi một vấn đề, vui lòng tìm kiếm trình theo dõi vấn đề, có thể một vấn đề cho vấn đề của bạn đã tồn tại và cuộc thảo luận có thể thông báo cho bạn về các giải pháp có sẵn.

Chúng tôi muốn khắc phục tất cả các vấn đề càng sớm càng tốt, nhưng trước khi sửa lỗi, chúng tôi cần tạo lại và xác nhận lỗi đó. Để tái tạo các lỗi, chúng tôi sẽ yêu cầu bạn cung cấp một kịch bản tái tạo tối thiểu bằng cách sử dụng http://plnkr.co một cách có hệ thống. Có một kịch bản trực tiếp, có thể tái tạo cung cấp cho chúng tôi vô số thông tin quan trọng mà không cần gửi lại cho bạn những câu hỏi bổ sung như:

- phiên bản của ng-alain được sử dụng
- Thư viện của bên thứ 3 và các phiên bản của chúng
- và quan trọng nhất - một ca sử dụng không thành công

Một kịch bản tái tạo tối thiểu bằng cách sử dụng http://plnkr.co/ cho phép chúng tôi nhanh chóng xác nhận một lỗi (hoặc chỉ ra vấn đề mã hóa) cũng như xác nhận rằng chúng tôi đang khắc phục đúng sự cố. Nếu plunker không phải là cách thích hợp để chứng minh vấn đề (ví dụ: đối với các vấn đề liên quan đến bao bì npm của chúng tôi), vui lòng tạo một kho lưu trữ git độc lập để giải thích vấn đề.

Chúng tôi sẽ nhấn mạnh vào một kịch bản tái tạo tối thiểu để tiết kiệm thời gian cho người bảo trì và cuối cùng có thể sửa nhiều lỗi hơn. Điều thú vị là từ kinh nghiệm của chúng tôi, người dùng thường tự tìm ra các vấn đề về mã hóa trong khi chuẩn bị một đoạn mã tối thiểu. Chúng tôi hiểu rằng đôi khi có thể khó trích xuất các bit mã cần thiết từ một cơ sở mã lớn hơn nhưng chúng tôi thực sự cần phải cô lập vấn đề trước khi có thể khắc phục.

Rất tiếc, chúng tôi không thể điều tra / sửa lỗi mà không có bản sao chép tối thiểu, vì vậy nếu chúng tôi không nhận được phản hồi từ bạn, chúng tôi sẽ đóng một sự cố không có đủ thông tin để tái tạo.

Bạn có thể gửi các vấn đề mới bằng cách điền vào [biểu mẫu vấn đề mới] của chúng tôi (https://github.com/ng-alain/ng-alain/issues/new).


### <a name="submit-pr"> </a> Gửi Yêu cầu kéo (PR)
Trước khi bạn gửi Yêu cầu kéo (PR), hãy xem xét các nguyên tắc sau:

* Tìm kiếm [GitHub] (https://github.com/ng-alain/ng-alain/pulls) để biết PR mở hoặc đóng
  liên quan đến trình của bạn. Bạn không muốn nhân đôi nỗ lực.
* Thực hiện các thay đổi của bạn trong một nhánh git mới:

  `` vỏ
  git checkout -b my-fix-branch master
  ``

* Tạo bản vá của bạn, ** bao gồm các trường hợp thử nghiệm thích hợp **.
* Tuân theo [Quy tắc viết mã] (# quy tắc) của chúng tôi.
* Chạy bộ thử nghiệm ng-alain đầy đủ <! -, như được mô tả trong [tài liệu dành cho nhà phát triển] [dev-doc] -> và đảm bảo rằng tất cả các thử nghiệm đều vượt qua.
* Cam kết các thay đổi của bạn bằng cách sử dụng thông báo cam kết mô tả theo sau của chúng tôi
  [quy ước thông báo cam kết] (# cam kết). Tuân thủ các quy ước này
  là cần thiết vì ghi chú phát hành được tạo tự động từ những thông báo này.

  `` vỏ
  git cam kết -a
  ``

  Lưu ý: tùy chọn dòng lệnh commit `-a` tùy chọn sẽ tự động" thêm "và các tệp đã chỉnh sửa" rm ".

* Đẩy chi nhánh của bạn lên GitHub:

  `` vỏ
  git push origin my-fix-branch
  ``

* Trong GitHub, gửi một yêu cầu kéo tới `ng-alain: master`.
* Nếu chúng tôi đề xuất các thay đổi thì:
  * Thực hiện các cập nhật cần thiết.
  * Chạy lại bộ kiểm tra ng-alain để đảm bảo các bài kiểm tra vẫn đang vượt qua.
  * Căn cứ lại chi nhánh của bạn và buộc đẩy vào kho lưu trữ GitHub của bạn (điều này sẽ cập nhật Yêu cầu kéo của bạn):

  `` vỏ
  git rebase master -i
  git push -f
  ``

Đó là nó! Cảm ơn sự đóng góp của bạn!

#### Sau khi hợp nhất yêu cầu kéo của bạn

Sau khi yêu cầu kéo của bạn được hợp nhất, bạn có thể xóa nhánh của mình một cách an toàn và kéo các thay đổi
từ kho lưu trữ chính (ngược dòng):

* Xóa nhánh từ xa trên GitHub thông qua giao diện người dùng web GitHub hoặc trình bao cục bộ của bạn như sau:

  `` vỏ
  git push origin - xóa my-fix-branch
  ``

* Kiểm tra chi nhánh chủ:

  `` vỏ
  git tổng thể thanh toán
