from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in language_translator/__init__.py
from language_translator import __version__ as version

setup(
	name="language_translator",
	version=version,
	description="Automatic language translator for Frappe ERPNext",
	author="Anthony Emmanuel C.",
	author_email="mymi14s@hotmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
