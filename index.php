<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>お問い合わせフォーム</title>
<style type="text/css">
	body {
		background-color: #f9fff2;
	}
	.input-area {
		margin-bottom: 20px;
	}
	input[type="text"],input[type="email"],select {
		width: 300px;
		height: 30px;
	}
	textarea {
		width: 300px;
	}
	p {
		font-weight: bold;
		font-size: 20px;
	}
	.btn-border {
		display: inline-block;
		max-width: 180px;
		text-align: left;
		border: 2px solid #9ec34b;
		font-size: 15px;
		color: #9ec34b;
		text-decoration: none;
		font-weight: bold;
		padding: 8px 16px;
		border-radius: 4px;
		transition: .4s;
	}
	.btn-border:hover {
		background-color: #9ec34b;
		border-color: #cbe585;
		color: #FFF;
	}
</style>
</head>
<body>
 	<form action="confirm.php" method="post">
 		<h2>お問い合わせフォーム</h2>
	 	<div class="input-area">
		 	<p>名前</p>
		 	<input type="text" name="name" placeholder="例）田中　太郎" required>
		</div>

		<div class="input-area">
		 	<p>メール</p>
		 	<input type="email" name="email" placeholder="例）abc@abc.com" required>
	 	</div>

		<div class="input-area">
	 		<p>お問い合わせ内容</p>
	 		<textarea name="contact_body" rows="5" placeholder="例）具体的な内容を記載" required></textarea>
		</div>
	 	<div class="input-area">
	 		<input type="submit" name="submit" value="確認画面へ" class="btn-border">
	 	</div>
	</form>
</body>
</html>
