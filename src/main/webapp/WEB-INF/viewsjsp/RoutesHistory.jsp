<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" isELIgnored="false"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>BGP Routes History</title>
<link rel="shortcut icon" type="image/x-icon"
	href="<%=request.getContextPath()%>/webtemplate/dist/img/AdminLTELogo.png">
<!-- Google Font: Source Sans Pro -->
<!-- <link rel="stylesheet" -->
<!-- 	href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"> -->
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/OfflineCss/googleapifamily.css">
<!-- Font Awesome -->
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/plugins/fontawesome-free/css/all.min.css">
<!-- DataTables -->
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/plugins/datatables-buttons/css/buttons.bootstrap4.min.css">

<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/plugins/sweetalert2-theme-bootstrap-4/bootstrap-4.min.css">



<!-- Theme style -->
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/webtemplate/dist/css/adminlte.min.css">

<style>
#spinnerTopConnChart {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.9);
	z-index: 1000;
}
</style>
</head>
<body class="hold-transition layout-top-nav">

	<div class="wrapper">

		<!-- Navbar -->

		<jsp:include page="header.jsp" />

		<!-- /.navbar -->

		<!-- Content Wrapper. Contains page content -->
		<div class="content-wrapper">
			<!-- Content Header (Page header) -->
			<section class="content-header">
				<div class="container-fluid">
					<div class="row mb-2">
						<div class="col-sm-6">
							<h1>BGP Routes History</h1>
						</div>
						<div class="col-sm-6">
							<ol class="breadcrumb float-sm-right">
								<li class="breadcrumb-item"><a href="#">Home</a></li>
								<li class="breadcrumb-item active">BGP Routes History</li>
							</ol>
						</div>
					</div>
				</div>
				<!-- /.container-fluid -->
			</section>

			<!-- Main content -->
			<section class="content">
				<div class="container-fluid">
					<div class="row">
						<div class="col-12">


							<div class="card">
								<div class="card-header">
									<h3 class="card-title">BGP Routes History</h3>
								</div>
								<!-- /.card-header -->
								<div class="card-body">
									<div id="spinnerTopConnChart">
										<center>
											<i style='margin-left: 10px; margin-top: 30%; color: blue'
												id='' class='fa fa-spinner fa-spin fa-2x'></i>
									</div>

									<table id="example1" class="table table-bordered table-striped">
										<thead>
											<tr>
												<th>Router Name</th>
												<th>Peer Name</th>
												<th>Prefix</th>
												<th>Prefix Length</th>
												<th>Origin</th>
												<th>Origin AS</th>
												<th>MED</th>
												<th>Local Pref</th>
												<th>NH</th>
												<th>AS Path</th>
												<th>Last Modified</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>tievens-csr</td>
												<td>sp-asrk1</td>
												<td>24.50.208.0</td>
												<td>20</td>
												<td>incomplete</td>
												<td>14638</td>
												<td>0</td>
												<td>100</td>
												<td>10.32.0.254</td>
												<td>65109 64530 109 7018 11992 14638</td>
												<td>14 Jun 2024 13:40:24</td>
											</tr>
											<tr>
												<td>tievens-csr</td>
												<td>sp-asrk1</td>
												<td>24.50.208.0</td>
												<td>20</td>
												<td>incomplete</td>
												<td>14638</td>
												<td>0</td>
												<td>100</td>
												<td>10.32.0.254</td>
												<td>65109 64530 109 7018 12956 14638</td>
												<td>14 Jun 2024 08:02:25</td>
											</tr>
											<tr>
												<td>tievens-csr</td>
												<td>sp-asrk1</td>
												<td>24.50.208.0</td>
												<td>20</td>
												<td>incomplete</td>
												<td>14638</td>
												<td>0</td>
												<td>100</td>
												<td>10.32.0.254</td>
												<td>65109 64530 109 7018 12956 14638</td>
												<td>29 May 2024 22:24:59</td>
											</tr>
											<tr>
												<td>router1</td>
												<td>peer-a</td>
												<td>192.168.1.0</td>
												<td>24</td>
												<td>IGP</td>
												<td>65001</td>
												<td>10</td>
												<td>150</td>
												<td>192.168.0.1</td>
												<td>65000 65002</td>
												<td>10 Jan 2025 12:15:42</td>
											</tr>
											<tr>
												<td>router2</td>
												<td>peer-b</td>
												<td>192.168.2.0</td>
												<td>24</td>
												<td>IGP</td>
												<td>65002</td>
												<td>20</td>
												<td>200</td>
												<td>192.168.0.2</td>
												<td>65000 65001</td>
												<td>10 Jan 2025 12:16:42</td>
											</tr>
											<tr>
												<td>router3</td>
												<td>peer-c</td>
												<td>10.0.0.0</td>
												<td>16</td>
												<td>IGP</td>
												<td>65003</td>
												<td>15</td>
												<td>120</td>
												<td>10.0.1.1</td>
												<td>65003 65004</td>
												<td>10 Jan 2025 12:17:42</td>
											</tr>
											<tr>
												<td>router4</td>
												<td>peer-d</td>
												<td>172.16.0.0</td>
												<td>12</td>
												<td>EGP</td>
												<td>65004</td>
												<td>5</td>
												<td>80</td>
												<td>172.16.1.1</td>
												<td>65002 65005</td>
												<td>10 Jan 2025 12:18:42</td>
											</tr>
											<tr>
												<td>router5</td>
												<td>peer-e</td>
												<td>192.168.3.0</td>
												<td>24</td>
												<td>incomplete</td>
												<td>65005</td>
												<td>25</td>
												<td>300</td>
												<td>192.168.0.3</td>
												<td>65001 65003</td>
												<td>10 Jan 2025 12:19:42</td>
											</tr>
											<tr>
												<td>router6</td>
												<td>peer-f</td>
												<td>10.1.0.0</td>
												<td>20</td>
												<td>incomplete</td>
												<td>65006</td>
												<td>30</td>
												<td>250</td>
												<td>10.1.0.1</td>
												<td>65000 65007</td>
												<td>10 Jan 2025 12:20:42</td>
											</tr>
											<tr>
												<td>router7</td>
												<td>peer-g</td>
												<td>172.17.0.0</td>
												<td>20</td>
												<td>EGP</td>
												<td>65007</td>
												<td>40</td>
												<td>180</td>
												<td>172.17.1.1</td>
												<td>65004 65002</td>
												<td>10 Jan 2025 12:21:42</td>
											</tr>
										</tbody>

										<tfoot>
											<tr>
												<th>Router Name</th>
												<th>Peer Name</th>
												<th>Prefix</th>
												<th>Prefix Length</th>
												<th>Origin</th>
												<th>Origin AS</th>
												<th>MED</th>
												<th>Local Pref</th>
												<th>NH</th>
												<th>AS Path</th>
												<th>Last Modified</th>
											</tr>
										</tfoot>
									</table>



								</div>
								<!-- /.card-body -->
							</div>
							<!-- /.card -->
						</div>
						<!-- /.col -->
					</div>
					<!-- /.row -->
				</div>
				<!-- /.container-fluid -->
			</section>
			<!-- /.content -->
		</div>
		<!-- /.content-wrapper -->
		<jsp:include page="footer.jsp" />

		<!-- Control Sidebar -->
		<aside class="control-sidebar control-sidebar-dark">
			<!-- Control sidebar content goes here -->
		</aside>
		<!-- /.control-sidebar -->
	</div>
	<!-- ./wrapper -->

	<!-- jQuery -->
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/sweetalert2/sweetalert2.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/jquery/jquery.min.js"></script>
	<!-- Bootstrap 4 -->
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
	<!-- DataTables  & Plugins -->
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/datatables/jquery.dataTables.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/jszip/jszip.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/pdfmake/pdfmake.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/pdfmake/vfs_fonts.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/datatables-buttons/js/buttons.html5.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/datatables-buttons/js/buttons.print.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/webtemplate/plugins/datatables-buttons/js/buttons.colVis.min.js"></script>

	<!-- AdminLTE App -->
	<script
		src="<%=request.getContextPath()%>/webtemplate/dist/js/adminlte.min.js"></script>
	<!-- AdminLTE for demo purposes -->
	<script src="<%=request.getContextPath()%>/webtemplate/dist/js/demo.js"></script>
	<script src="<%=request.getContextPath()%>/custom_js/addNode.js"></script>

	<!-- Page specific script -->
	<script>
		$(function() {
			$('#example1').DataTable(
					{
						lengthChange : false,
						autoWidth : false,
						"pageLength" : 10,
						scrollX : true,
						scrollY : true,
						"buttons" : [ "copy", "csv", "excel", "pdf", "print",
								"colvis" ],
						"initComplete" : function(settings, json) {
							// Hide loader once the DataTable is initialized
							$('#spinnerTopConnChart').hide();
						},
						"drawCallback" : function(settings) {
							// Hide loader after each draw (page change, etc.)
							$('#spinnerTopConnChart').hide();
						}
					}).buttons().container().appendTo(
					'#example1_wrapper .col-md-6:eq(0)');
		});
	</script>
</body>
</html>
